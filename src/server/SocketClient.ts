import Net from "net";
import AbstractSocketClient from "./AbstractSocketClient.js";
import SkyUtil from "./SkyUtil.js";
import SocketServer from "./SocketServer.js";

export default class SocketClient extends AbstractSocketClient {

    public ip: string | undefined;
    public disconnected = false;

    private receivedStr = "";

    private sendKey: number = 0;

    constructor(
        private server: SocketServer,
        private socket: Net.Socket,
    ) {
        super();

        let ip = socket.remoteAddress;

        // IPv6 to IPv4
        if (ip !== undefined && ip.substring(0, 7) === '::ffff:') {
            ip = ip.substring(7);
        }

        socket.on("data", (buffer) => {
            this.receivedStr += buffer.toString();

            let index;
            while ((index = this.receivedStr.indexOf("\r\n")) !== -1) {
                const data = SkyUtil.jsonParseWithUndefined(this.receivedStr.substring(0, index));
                this.proc(data);
                this.receivedStr = this.receivedStr.substring(index + 1);
            }
        });

        socket.on("close", () => {
            this.disconnected = true;
            this.fireEvent("disconnect");
        });

        socket.on("error", (error: any) => {
            if (error.code !== "ECONNRESET" && error.code !== "EPIPE" && error.code !== "ETIMEDOUT" && error.code !== "ENETUNREACH" && error.code !== "EHOSTUNREACH" && error.code !== "ECONNREFUSED" && error.code !== "EINVAL") {
                console.error(error);
            }
        });
    }

    private async proc(data: any) {
        console.log(data);
        try {
            const results = await this.fireEvent(data.method, ...data.params);
            if (data.__send_key !== undefined) {
                if (results.length === 0) {
                    console.error("메소드를 찾을 수 없음", data);
                    this._send({ method: `__error_${data.__send_key}`, params: ["메소드를 찾을 수 없음"] });
                } else {
                    for (const result of results) {
                        this._send({ method: `__callback_${data.__send_key}`, params: [result] });
                    }
                }
            }
        } catch (error: any) {
            if (data.__send_key !== undefined) {
                this._send({ method: `__error_${data.__send_key}`, params: [error.toString()] });
            } else {
                console.error(error);
            }
        }
    }

    public _send(data: any) {
        this.socket.write(JSON.stringify(data) + "\r\n");
    }

    public send(method: string, ...params: any[]): Promise<any> {
        this._send({ method, params, __send_key: this.sendKey });
        const callbackName = `__callback_${this.sendKey}`;
        const errorkName = `__error_${this.sendKey}`;
        this.sendKey += 1;
        return new Promise((resolve) => {
            if (this.deleted !== true) {

                const callbackHandler = (result: any) => {
                    resolve(result);
                    this.off(callbackName, callbackHandler);
                    this.off(errorkName, errorHandler);
                };
                this.on(callbackName, callbackHandler);

                const errorHandler = (errorMessage: string) => {
                    console.error(`${method}(${params.join(", ")}) ${errorMessage}`);
                    this.off(callbackName, callbackHandler);
                    this.off(errorkName, errorHandler);
                };
                this.on(errorkName, errorHandler);
            }
        });
    }

    public broadcast(method: string, ...params: any[]) {
        for (const client of this.server.clients) {
            if (client !== this) {
                client._send({ method, params });
            }
        }
    }
}

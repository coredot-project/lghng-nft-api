import HTTP from "http";
import * as Querystring from "querystring";
import WebSocket from "ws";
import AbstractSocketClient from "./AbstractSocketClient.js";
import WebSocketServer from "./WebSocketServer.js";
import SkyUtil from "./SkyUtil.js";

export default class WebSocketClient extends AbstractSocketClient {

    public ip: string;
    public origin: string | undefined;
    public userAgent: string | undefined;
    public key: string | undefined;

    public disconnected = false;

    private sendKey: number = 0;

    constructor(
        private server: WebSocketServer,
        private webSocket: WebSocket,
        public nativeRequest: HTTP.IncomingMessage,
    ) {
        super();

        // find ip
        const headerIp = nativeRequest.headers["x-forwarded-for"];
        if (headerIp !== undefined) {
            if (typeof headerIp === "string") {
                this.ip = headerIp;
            } else if (headerIp[0] !== undefined) {
                this.ip = headerIp[0];
            } else if (nativeRequest.socket.remoteAddress !== undefined) {
                this.ip = nativeRequest.socket.remoteAddress;
            } else {
                this.ip = "";
            }
        } else if (nativeRequest.socket.remoteAddress !== undefined) {
            this.ip = nativeRequest.socket.remoteAddress;
        } else {
            this.ip = "";
        }

        // IPv6 to IPv4
        if (this.ip.substring(0, 7) === "::ffff:") {
            this.ip = this.ip.substring(7);
        }

        this.origin = nativeRequest.headers.origin;
        this.userAgent = nativeRequest.headers["user-agent"];

        const uri = nativeRequest.url!;
        let parameterString;
        if (uri.indexOf("?") !== -1) {
            parameterString = uri.substring(uri.indexOf("?") + 1);
        } else {
            parameterString = "";
        }

        const queryParams = Querystring.parse(parameterString);
        if (typeof queryParams.key === "string") {
            this.key = queryParams.key;
        }

        webSocket.on("message", async (raw: string | Buffer, isBinary) => {

            if (isBinary === true) {
                this.fireEvent("buffer", raw);
            }

            else {
                const data = SkyUtil.jsonParseWithUndefined(raw as string);
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
        });

        webSocket.on("close", () => {
            this.disconnected = true;
            this.fireEvent("disconnect");
        });
    }

    public _send(data: any) {
        this.webSocket.send(JSON.stringify(data));
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

    public disconnect() {
        this.webSocket.close();
    }
}

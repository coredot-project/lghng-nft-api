import Net from "net";
import OS from "os";
import SkyLog from "./SkyLog.js";
import SkyUtil from "./SkyUtil.js";
import SocketClient from "./SocketClient.js";

export interface SocketServerOptions {
    port: number;
}

export default class SocketServer {

    public clients: SocketClient[] = [];

    constructor(
        options: SocketServerOptions,
        handler: (client: SocketClient) => void,
    ) {
        const server = Net.createServer((socket) => {
            const client = new SocketClient(this, socket);
            this.clients.push(client);
            client.on("disconnect", () => {
                SkyUtil.pull(this.clients, client);
                client.delete();
            });
            handler(client);
        });
        server.listen(options.port);

        SkyLog.success(`socket server running... ${this.ips[0]}:${options.port}`);
    }

    private get ips() {
        const interfaces = OS.networkInterfaces();
        const ips: string[] = [];
        for (const key in interfaces) {
            interfaces[key]?.forEach((int) => {
                if (int.family === "IPv4" && int.internal !== true) {
                    ips.push(int.address);
                }
            });
        }
        return ips;
    }

    public broadcast(method: string, ...params: any[]) {
        for (const client of this.clients) {
            client._send({ method, params });
        }
    }
}

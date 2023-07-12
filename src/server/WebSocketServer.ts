import * as HTTP from "http";
import WebSocket, { WebSocketServer as _WebSocketServer } from "ws";
import WebServer from "./WebServer.js";
import WebSocketClient from "./WebSocketClient.js";
import SkyUtil from "./SkyUtil.js";
import SkyLog from "./SkyLog.js";

export default class WebSocketServer {

    public clients: WebSocketClient[] = [];

    constructor(
        private webServer: WebServer,
        private handler: (client: WebSocketClient) => void,
        private headerHandler?: (headers: string[], req: HTTP.IncomingMessage) => void,
    ) {
        if (webServer.httpsServer === undefined) {
            webServer.on("load", async () => this.launch());
        } else {
            this.launch();
        }
    }

    private launch() {

        const server = new _WebSocketServer({
            server: this.webServer.httpsServer,
        });

        if (this.headerHandler !== undefined) {
            server.on("headers", this.headerHandler);
        }

        server.on("connection", (webSocket: WebSocket, req: HTTP.IncomingMessage) => {
            const client = new WebSocketClient(this, webSocket, req);
            this.clients.push(client);
            client.on("disconnect", () => {
                SkyUtil.pull(this.clients, client);
                client.delete();
            });
            this.handler(client);
        });

        SkyLog.success("websocket server running...");
    }

    public broadcast(method: string, ...params: any[]) {
        for (const client of this.clients) {
            client._send({ method, params });
        }
    }
}

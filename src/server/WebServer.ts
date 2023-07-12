import EventContainer from "./EventContainer.js";
import { exec } from "child_process";
import * as HTTP from "http";
import * as HTTPS from "https";
import * as Path from "path";
import * as TLS from "tls";
import { SecureContext } from "tls";
import CONTENT_TYPES from "./CONTENT_TYPES.json";
import ENCODINGS from "./ENCODINGS.json";
import SkyFiles from "./SkyFiles.js";
import SkyLog from "./SkyLog.js";
import WebRequest from "./WebRequest.js";
import WebResponse from "./WebResponse.js";

export interface WebServerOptions {
    port?: number;
    httpPort?: number;
    ssl?: {
        [domain: string]: {
            key: string,
            cert: string,
        },
    },
    publicFolderPath?: string;
    indexFilePath?: string;
    autoRenewCertbot?: boolean;
}

export default class WebServer extends EventContainer {

    public static contentTypeFromPath(path: string): string {
        const extension = Path.extname(path).substring(1);
        const contentType = (CONTENT_TYPES as any)[extension];
        return contentType === undefined ? "application/octet-stream" : contentType;
    }

    public static encodingFromContentType(contentType: string): BufferEncoding {
        const encoding = (ENCODINGS as any)[contentType];
        return encoding === undefined ? "binary" : encoding;
    }

    public httpsServer: HTTPS.Server | HTTP.Server | undefined;
    private secureContexts: { [domain: string]: SecureContext } = {};

    constructor(
        private options: WebServerOptions,
        private handler?: (webRequest: WebRequest, webResponse: WebResponse) => Promise<void>,
        private notFoundHandler?: (webRequest: WebRequest, webResponse: WebResponse) => void,
    ) {
        super();
        this.load();
        if (options.autoRenewCertbot === true) {
            this.renewCertbot();
        }
    }

    private responseStream(webRequest: WebRequest, webResponse: WebResponse) {
        //TODO:
    }

    private async responseResource(webRequest: WebRequest, webResponse: WebResponse) {
        if (webRequest.uri.includes("..") === true) {
            webResponse.response({ statusCode: 500, content: "Stop Attack" });
        } else {
            if (webRequest.headers.range !== undefined) {
                this.responseStream(webRequest, webResponse);
            } else if (webRequest.method === "GET") {
                try {
                    const contentType = WebServer.contentTypeFromPath(webRequest.uri);
                    const content = await SkyFiles.readBuffer(`${process.cwd()}/${this.options.publicFolderPath ?? "public"}/${webRequest.uri}`);
                    webResponse.response({ content, contentType });
                } catch (error) {
                    try {
                        const indexFileContent = await SkyFiles.readBuffer(`${process.cwd()}/${this.options.publicFolderPath ?? "public"}/${this.options.indexFilePath === undefined ? "index.html" : this.options.indexFilePath}`);
                        webResponse.response({ content: indexFileContent, contentType: "text/html" });
                    } catch (error) {
                        webResponse.response({ statusCode: 404 });
                    }
                }
            }
        }
    }

    private async loadSecureContext() {
        for (const [domain, c] of Object.entries(this.options.ssl!)) {
            this.secureContexts[domain] = TLS.createSecureContext({
                key: await SkyFiles.readBuffer(c.key),
                cert: await SkyFiles.readBuffer(c.cert)
            }).context;
        }
    }

    private renewCertbot() {
        exec("certbot renew", (error) => {
            if (error !== null) {
                console.error(error);
            }
        });
    }

    private requestListener = async (req: HTTP.IncomingMessage, res: HTTP.ServerResponse) => {

        const webRequest = new WebRequest(req);
        const webResponse = new WebResponse(webRequest, res);

        if (webRequest.method === "OPTIONS") {
            webResponse.response({
                headers: {
                    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }

        else {
            if (this.handler !== undefined) {
                await this.handler(webRequest, webResponse);
            }
            if (webResponse.responsed !== true) {
                await this.responseResource(webRequest, webResponse);
                if (this.notFoundHandler !== undefined && (webResponse.responsed as any) !== true) {
                    this.notFoundHandler(webRequest, webResponse);
                }
            }
        }
    };

    private async load() {

        if (this.options.port !== undefined) {
            await this.loadSecureContext();

            this.httpsServer = HTTPS.createServer({
                SNICallback: (domain, callback) => {
                    callback(null, this.secureContexts[domain]);
                },
            }, this.requestListener).listen(this.options.port);

            this.httpsServer.on("error", (error) => {
                SkyLog.error(error, this.options);
            });

            if (this.options.httpPort !== undefined) {
                // http -> https redirect
                HTTP.createServer((req, res) => {
                    res.writeHead(302, {
                        Location: `https://${req.headers.host}${this.options.port === 443 ? "" : `:${this.options.port}`}${req.url}`,
                    });
                    res.end();
                }).listen(this.options.httpPort);
            }

            SkyLog.success(`web server running... https://localhost:${this.options.port}`);

            this.fireEvent("load");

            // 매일 새로 불러옴
            setInterval(() => {
                this.loadSecureContext();
                if (this.options.autoRenewCertbot === true) {
                    this.renewCertbot();
                }
            }, 86400000);
        }

        else if (this.options.httpPort !== undefined) {

            this.httpsServer = HTTP.createServer(this.requestListener).listen(this.options.httpPort);

            this.httpsServer.on("error", (error) => {
                SkyLog.error(error, this.options);
            });

            SkyLog.success(`web server running... http://localhost:${this.options.httpPort}`);

            this.fireEvent("load");
        }
    }
}

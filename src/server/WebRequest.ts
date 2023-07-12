import * as HTTP from "http";
import * as Querystring from "querystring";
import URIParser from "./routing/URIParser.js";
import { ViewParams } from "./routing/View.js";

export default class WebRequest {

    public headers: HTTP.IncomingHttpHeaders;
    public method: string;
    public ip: string;
    public parameterString: string;
    public parameters: { [name: string]: string | undefined } = {};
    public uri: string;

    public responsed = false;

    constructor(public req: HTTP.IncomingMessage) {

        this.headers = req.headers;
        this.method = req.method!.toUpperCase();

        let ip: string | undefined;

        const headerIps = this.headers["x-forwarded-for"];
        if (headerIps !== undefined) {
            if (typeof headerIps === "string") {
                ip = headerIps;
            } else {
                ip = headerIps[0];
            }
        }

        if (ip === undefined) {
            ip = req.socket.remoteAddress;
            if (ip === undefined) {
                ip = "";
            }
        }

        // IPv6 to IPv4
        if (ip.substring(0, 7) === "::ffff:") {
            ip = ip.substring(7);
        }
        this.ip = ip;

        this.uri = req.url!;

        if (this.uri.indexOf("?") !== -1) {
            this.parameterString = this.uri.substring(this.uri.indexOf("?") + 1);
            this.uri = this.uri.substring(0, this.uri.indexOf("?"));
        } else {
            this.parameterString = "";
        }

        const queryParams = Querystring.parse(this.parameterString);
        for (const [name, param] of Object.entries(queryParams)) {
            if (Array.isArray(param) === true) {
                this.parameters[name] = queryParams[param!.length - 1] as any;
            } else {
                this.parameters[name] = queryParams[name] as any;
            }
        }

        this.uri = this.uri.substring(1);
    }

    public async loadBody(): Promise<string> {
        const buffers = [];
        for await (const chunk of this.req) {
            buffers.push(chunk);
        }
        return Buffer.concat(buffers).toString();
    }

    public async route(pattern: string, handler: (params: ViewParams) => Promise<void>) {
        const params: ViewParams = {};
        if (this.responsed !== true && URIParser.parse(this.uri, pattern, params) === true) {
            await handler(params);
        }
    }

    public toString = (): string => {
        return JSON.stringify({
            headers: this.headers,
            method: this.method,
            ip: this.ip,
            parameterString: this.parameterString,
            parameters: this.parameters,
            uri: this.uri,
        });
    }
}

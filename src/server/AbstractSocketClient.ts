import EventContainer from "./EventContainer.js";

export default abstract class AbstractSocketClient extends EventContainer {
    public abstract send(method: string, ...params: any[]): void;
}

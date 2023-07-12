import EventContainer from "../EventContainer";
import Klaytn from "./Klaytn";

export default abstract class KlaytnContract extends EventContainer {

    protected contract: any;

    constructor(public address: string, abi: any) {
        super();
        this.contract = Klaytn.createContract(address, abi);
    }
}

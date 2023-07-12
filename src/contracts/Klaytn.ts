const Caver = require("caver-js");

class Klaytn {

    public caver = new Caver("https://public-en-cypress.klaytn.net/");

    public walletAddress: string;

    public init() {
        this.walletAddress = process.env.PUBLIC_KEY;
        this.caver.wallet.add(
            new this.caver.wallet.keyring.singleKeyring(
                this.walletAddress,
                new this.caver.wallet.keyring.privateKey(process.env.PRIVATE_KEY),
            ),
        );
    }

    public createContract(address: string, abi: any) {
        return this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();

import { BigNumber } from 'ethers';
import Contract from './Contract';
import Klaytn from './Klaytn';
import DrGrootMinterArtifact from './abi/artifacts/contracts/DrGrootMinter.sol/DrGrootMinter.json';

export default class DrGrootMinterContract extends Contract {
  constructor(address: string) {
    super(address, DrGrootMinterArtifact.abi);
  }

  public async sellCount(): Promise<BigNumber> {
    return BigNumber.from(await this.contract.methods.sellCount().call());
  }

  public async whitelists(addr: string): Promise<boolean> {
    return await this.contract.methods.whitelists(addr).call();
  }

  public async mintByWon(to: string, count: number): Promise<void> {
    const register = Klaytn.walletAddress;
    await this.contract.methods
      .mintByWon(to, count)
      .send({ from: register, gas: 1500000 });
  }
}

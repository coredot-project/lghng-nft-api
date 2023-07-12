import { BigNumber, BigNumberish } from 'ethers';
import Contract from './Contract';
import DrGrootArtifact from './abi/artifacts/contracts/DrGroot.sol/DrGroot.json';

export default class DrGrootContract extends Contract {
  constructor(address: string) {
    super(address, DrGrootArtifact.abi);
  }

  public async totalSupply(): Promise<BigNumber> {
    return BigNumber.from(await this.contract.methods.totalSupply().call());
  }

  public async ownerOf(id: BigNumberish): Promise<string> {
    return await this.contract.methods.ownerOf(id).call();
  }

  public async balanceOf(address: string): Promise<BigNumber> {
    return BigNumber.from(
      await this.contract.methods.balanceOf(address).call(),
    );
  }

  public async maxNumber(): Promise<BigNumber> {
    return BigNumber.from(await this.contract.methods.maxNumber().call());
  }

  public async firstPurchaser(tokenId: BigNumberish): Promise<string> {
    return await this.contract.methods.firstPurchaser(tokenId).call();
  }

  public async tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
  ): Promise<BigNumber> {
    return BigNumber.from(
      await this.contract.methods.tokenOfOwnerByIndex(owner, index).call(),
    );
  }
}

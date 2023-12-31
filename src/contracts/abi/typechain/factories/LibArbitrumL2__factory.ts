/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LibArbitrumL2 } from "../LibArbitrumL2";

export class LibArbitrumL2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LibArbitrumL2> {
    return super.deploy(overrides || {}) as Promise<LibArbitrumL2>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibArbitrumL2 {
    return super.attach(address) as LibArbitrumL2;
  }
  connect(signer: Signer): LibArbitrumL2__factory {
    return super.connect(signer) as LibArbitrumL2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibArbitrumL2 {
    return new Contract(address, _abi, signerOrProvider) as LibArbitrumL2;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ARBSYS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e3610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063bf0a12cf146038575b600080fd5b603e6052565b604051604991906094565b60405180910390f35b606481565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006080826057565b9050919050565b608e816077565b82525050565b600060208201905060a760008301846087565b9291505056fea26469706673582212201ed5fdc0a5861995c0baa236214ac77c37ac72038ae2f1ec30066b7648a5826d64736f6c63430008090033";

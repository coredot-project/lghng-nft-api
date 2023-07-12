/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DisableNew } from "../DisableNew";

export class DisableNew__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DisableNew> {
    return super.deploy(overrides || {}) as Promise<DisableNew>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DisableNew {
    return super.attach(address) as DisableNew;
  }
  connect(signer: Signer): DisableNew__factory {
    return super.connect(signer) as DisableNew__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DisableNew {
    return new Contract(address, _abi, signerOrProvider) as DisableNew;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001f61002460201b60201c565b6101bf565b600060019054906101000a900460ff1615610074576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161006b90610168565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff1610156100e35760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff6040516100da91906101a4565b60405180910390a15b565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b60006101526027836100e5565b915061015d826100f6565b604082019050919050565b6000602082019050818103600083015261018181610145565b9050919050565b600060ff82169050919050565b61019e81610188565b82525050565b60006020820190506101b96000830184610195565b92915050565b603f806101cd6000396000f3fe6080604052600080fdfea264697066735822122071ab6b1dc266d1a54260a2e75873eb804046e4eebe7a25815eadf2e1133b503f64736f6c63430008090033";

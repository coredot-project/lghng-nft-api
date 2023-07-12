/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CrossChainEnabledAMB } from "../CrossChainEnabledAMB";

export class CrossChainEnabledAMB__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(bridge: string, overrides?: Overrides): Promise<CrossChainEnabledAMB> {
    return super.deploy(
      bridge,
      overrides || {}
    ) as Promise<CrossChainEnabledAMB>;
  }
  getDeployTransaction(
    bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridge, overrides || {});
  }
  attach(address: string): CrossChainEnabledAMB {
    return super.attach(address) as CrossChainEnabledAMB;
  }
  connect(signer: Signer): CrossChainEnabledAMB__factory {
    return super.connect(signer) as CrossChainEnabledAMB__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledAMB {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledAMB;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610151380380610151833981810160405281019061003291906100cf565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100fc565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b6100ac81610091565b81146100b757600080fd5b50565b6000815190506100c9816100a3565b92915050565b6000602082840312156100e5576100e461006c565b5b60006100f3848285016100ba565b91505092915050565b608051603f61011260003960005050603f6000f3fe6080604052600080fdfea26469706673582212207e097134bc0ba7bf8cdc63a83064506f7a7d8aa6cfb9e82f59bfa26c99ea648f64736f6c63430008090033";

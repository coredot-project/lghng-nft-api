/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ERC2771Context } from "../ERC2771Context";

export class ERC2771Context__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC2771Context {
    return new Contract(address, _abi, signerOrProvider) as ERC2771Context;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
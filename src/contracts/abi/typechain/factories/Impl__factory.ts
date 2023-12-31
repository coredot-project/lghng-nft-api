/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Impl } from "../Impl";

export class Impl__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): Impl {
    return new Contract(address, _abi, signerOrProvider) as Impl;
  }
}

const _abi = [
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

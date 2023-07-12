/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC1820ImplementerMockInterface extends ethers.utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "registerInterfaceForAddress(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerInterfaceForAddress",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerInterfaceForAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export class ERC1820ImplementerMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC1820ImplementerMockInterface;

  functions: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "canImplementInterfaceForAddress(bytes32,address)"(
    interfaceHash: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  registerInterfaceForAddress(
    interfaceHash: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerInterfaceForAddress(bytes32,address)"(
    interfaceHash: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    registerInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canImplementInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerInterfaceForAddress(
      interfaceHash: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerInterfaceForAddress(bytes32,address)"(
      interfaceHash: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

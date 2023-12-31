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

interface EnumerableAddressSetMockInterface extends ethers.utils.Interface {
  functions: {
    "add(address)": FunctionFragment;
    "at(uint256)": FunctionFragment;
    "contains(address)": FunctionFragment;
    "length()": FunctionFragment;
    "remove(address)": FunctionFragment;
    "values()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "add", values: [string]): string;
  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "contains", values: [string]): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(functionFragment: "remove", values: [string]): string;
  encodeFunctionData(functionFragment: "values", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;

  events: {
    "OperationResult(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}

export class EnumerableAddressSetMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EnumerableAddressSetMockInterface;

  functions: {
    add(value: string, overrides?: Overrides): Promise<ContractTransaction>;

    "add(address)"(
      value: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    contains(value: string, overrides?: CallOverrides): Promise<[boolean]>;

    "contains(address)"(
      value: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    "length()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(value: string, overrides?: Overrides): Promise<ContractTransaction>;

    "remove(address)"(
      value: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    values(overrides?: CallOverrides): Promise<[string[]]>;

    "values()"(overrides?: CallOverrides): Promise<[string[]]>;
  };

  add(value: string, overrides?: Overrides): Promise<ContractTransaction>;

  "add(address)"(
    value: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "at(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  contains(value: string, overrides?: CallOverrides): Promise<boolean>;

  "contains(address)"(
    value: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  "length()"(overrides?: CallOverrides): Promise<BigNumber>;

  remove(value: string, overrides?: Overrides): Promise<ContractTransaction>;

  "remove(address)"(
    value: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  values(overrides?: CallOverrides): Promise<string[]>;

  "values()"(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    add(value: string, overrides?: CallOverrides): Promise<void>;

    "add(address)"(value: string, overrides?: CallOverrides): Promise<void>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    contains(value: string, overrides?: CallOverrides): Promise<boolean>;

    "contains(address)"(
      value: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    "length()"(overrides?: CallOverrides): Promise<BigNumber>;

    remove(value: string, overrides?: CallOverrides): Promise<void>;

    "remove(address)"(value: string, overrides?: CallOverrides): Promise<void>;

    values(overrides?: CallOverrides): Promise<string[]>;

    "values()"(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    OperationResult(result: null): EventFilter;
  };

  estimateGas: {
    add(value: string, overrides?: Overrides): Promise<BigNumber>;

    "add(address)"(value: string, overrides?: Overrides): Promise<BigNumber>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contains(value: string, overrides?: CallOverrides): Promise<BigNumber>;

    "contains(address)"(
      value: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    "length()"(overrides?: CallOverrides): Promise<BigNumber>;

    remove(value: string, overrides?: Overrides): Promise<BigNumber>;

    "remove(address)"(value: string, overrides?: Overrides): Promise<BigNumber>;

    values(overrides?: CallOverrides): Promise<BigNumber>;

    "values()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(value: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "add(address)"(
      value: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contains(
      value: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "contains(address)"(
      value: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "length()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(value: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "remove(address)"(
      value: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    values(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "values()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

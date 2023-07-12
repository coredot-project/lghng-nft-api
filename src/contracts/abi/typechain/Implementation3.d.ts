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

interface Implementation3Interface extends ethers.utils.Interface {
  functions: {
    "getValue(uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "setValue(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class Implementation3 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Implementation3Interface;

  functions: {
    getValue(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getValue(uint256)"(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

    setValue(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setValue(uint256)"(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getValue(
    _number: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getValue(uint256)"(
    _number: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

  setValue(
    _number: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setValue(uint256)"(
    _number: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getValue(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getValue(uint256)"(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    setValue(_number: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setValue(uint256)"(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(version: null): EventFilter;
  };

  estimateGas: {
    getValue(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getValue(uint256)"(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides): Promise<BigNumber>;

    "initialize()"(overrides?: Overrides): Promise<BigNumber>;

    setValue(_number: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setValue(uint256)"(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getValue(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getValue(uint256)"(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setValue(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setValue(uint256)"(
      _number: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

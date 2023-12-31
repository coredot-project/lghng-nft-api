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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface StringsMockInterface extends ethers.utils.Interface {
  functions: {
    "fromAddressHexFixed(address)": FunctionFragment;
    "fromUint256(uint256)": FunctionFragment;
    "fromUint256Hex(uint256)": FunctionFragment;
    "fromUint256HexFixed(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "fromAddressHexFixed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "fromUint256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fromUint256Hex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fromUint256HexFixed",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "fromAddressHexFixed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fromUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fromUint256Hex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fromUint256HexFixed",
    data: BytesLike
  ): Result;

  events: {};
}

export class StringsMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StringsMockInterface;

  functions: {
    fromAddressHexFixed(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fromAddressHexFixed(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fromUint256(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fromUint256(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fromUint256Hex(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fromUint256Hex(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fromUint256HexFixed(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "fromUint256HexFixed(uint256,uint256)"(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  fromAddressHexFixed(addr: string, overrides?: CallOverrides): Promise<string>;

  "fromAddressHexFixed(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  fromUint256(value: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "fromUint256(uint256)"(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fromUint256Hex(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "fromUint256Hex(uint256)"(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fromUint256HexFixed(
    value: BigNumberish,
    length: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "fromUint256HexFixed(uint256,uint256)"(
    value: BigNumberish,
    length: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    fromAddressHexFixed(
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "fromAddressHexFixed(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    fromUint256(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "fromUint256(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fromUint256Hex(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "fromUint256Hex(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fromUint256HexFixed(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "fromUint256HexFixed(uint256,uint256)"(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    fromAddressHexFixed(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromAddressHexFixed(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fromUint256(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromUint256(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fromUint256Hex(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromUint256Hex(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fromUint256HexFixed(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromUint256HexFixed(uint256,uint256)"(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fromAddressHexFixed(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromAddressHexFixed(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromUint256(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromUint256(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromUint256Hex(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromUint256Hex(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromUint256HexFixed(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromUint256HexFixed(uint256,uint256)"(
      value: BigNumberish,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

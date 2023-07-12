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

interface BridgeOptimismMockInterface extends ethers.utils.Interface {
  functions: {
    "relayAs(address,bytes,address)": FunctionFragment;
    "xDomainMessageSender()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "relayAs",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "xDomainMessageSender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "relayAs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "xDomainMessageSender",
    data: BytesLike
  ): Result;

  events: {};
}

export class BridgeOptimismMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BridgeOptimismMockInterface;

  functions: {
    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<[string]>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<[string]>;
  };

  relayAs(
    target: string,
    data: BytesLike,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "relayAs(address,bytes,address)"(
    target: string,
    data: BytesLike,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

  "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "xDomainMessageSender()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

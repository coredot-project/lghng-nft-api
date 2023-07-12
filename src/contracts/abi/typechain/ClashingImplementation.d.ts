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

interface ClashingImplementationInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "delegatedFunction()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegatedFunction",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegatedFunction",
    data: BytesLike
  ): Result;

  events: {};
}

export class ClashingImplementation extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ClashingImplementationInterface;

  functions: {
    admin(overrides?: CallOverrides): Promise<[string]>;

    "admin()"(overrides?: CallOverrides): Promise<[string]>;

    delegatedFunction(overrides?: CallOverrides): Promise<[boolean]>;

    "delegatedFunction()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  delegatedFunction(overrides?: CallOverrides): Promise<boolean>;

  "delegatedFunction()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    delegatedFunction(overrides?: CallOverrides): Promise<boolean>;

    "delegatedFunction()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegatedFunction(overrides?: CallOverrides): Promise<BigNumber>;

    "delegatedFunction()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegatedFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "delegatedFunction()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

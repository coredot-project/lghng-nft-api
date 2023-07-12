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

interface EtherReceiverMockInterface extends ethers.utils.Interface {
  functions: {
    "setAcceptEther(bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setAcceptEther",
    values: [boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "setAcceptEther",
    data: BytesLike
  ): Result;

  events: {};
}

export class EtherReceiverMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EtherReceiverMockInterface;

  functions: {
    setAcceptEther(
      acceptEther: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAcceptEther(bool)"(
      acceptEther: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  setAcceptEther(
    acceptEther: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAcceptEther(bool)"(
    acceptEther: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    setAcceptEther(
      acceptEther: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAcceptEther(bool)"(
      acceptEther: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    setAcceptEther(
      acceptEther: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAcceptEther(bool)"(
      acceptEther: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setAcceptEther(
      acceptEther: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAcceptEther(bool)"(
      acceptEther: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
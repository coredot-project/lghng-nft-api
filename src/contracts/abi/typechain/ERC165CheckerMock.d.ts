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

interface ERC165CheckerMockInterface extends ethers.utils.Interface {
  functions: {
    "getSupportedInterfaces(address,bytes4[])": FunctionFragment;
    "supportsAllInterfaces(address,bytes4[])": FunctionFragment;
    "supportsERC165(address)": FunctionFragment;
    "supportsERC165InterfaceUnchecked(address,bytes4)": FunctionFragment;
    "supportsInterface(address,bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSupportedInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsAllInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsERC165",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsERC165InterfaceUnchecked",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSupportedInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsAllInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsERC165",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsERC165InterfaceUnchecked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class ERC165CheckerMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC165CheckerMockInterface;

  functions: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    "getSupportedInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsERC165(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsERC165InterfaceUnchecked(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsERC165InterfaceUnchecked(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getSupportedInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  "getSupportedInterfaces(address,bytes4[])"(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  supportsAllInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsAllInterfaces(address,bytes4[])"(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsERC165(account: string, overrides?: CallOverrides): Promise<boolean>;

  "supportsERC165(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsERC165InterfaceUnchecked(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsERC165InterfaceUnchecked(address,bytes4)"(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsInterface(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(address,bytes4)"(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    "getSupportedInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsERC165(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsERC165InterfaceUnchecked(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsERC165InterfaceUnchecked(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSupportedInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsERC165(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsERC165InterfaceUnchecked(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsERC165InterfaceUnchecked(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSupportedInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsAllInterfaces(address,bytes4[])"(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsERC165(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsERC165InterfaceUnchecked(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsERC165InterfaceUnchecked(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(address,bytes4)"(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

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

interface VotesMockInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "delegate(address)": FunctionFragment;
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getPastTotalSupply(uint256)": FunctionFragment;
    "getPastVotes(address,uint256)": FunctionFragment;
    "getTotalSupply()": FunctionFragment;
    "getVotes(address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "nonces(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "delegateBySig",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "delegates", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPastTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPastTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;

  events: {
    "DelegateChanged(address,address,address)": EventFragment;
    "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
}

export class VotesMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VotesMockInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<[string]>;

    burn(
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(uint256)"(
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegate(address)"(
      delegatee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegate(address,address)"(
      account: string,
      newDelegation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)"(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegates(account: string, overrides?: CallOverrides): Promise<[string]>;

    "delegates(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getChainId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPastTotalSupply(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPastVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTotalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "getVotes(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mint(
      account: string,
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      account: string,
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;

  burn(
    voteId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(uint256)"(
    voteId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegate(address)"(
    delegatee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegate(address,address)"(
    account: string,
    newDelegation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegateBySig(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)"(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegates(account: string, overrides?: CallOverrides): Promise<string>;

  "delegates(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

  getPastTotalSupply(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPastTotalSupply(uint256)"(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastVotes(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPastVotes(address,uint256)"(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getVotes(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mint(
    account: string,
    voteId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    account: string,
    voteId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "nonces(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;

    burn(voteId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "burn(uint256)"(
      voteId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "delegate(address)"(
      delegatee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "delegate(address,address)"(
      account: string,
      newDelegation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)"(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegates(account: string, overrides?: CallOverrides): Promise<string>;

    "delegates(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPastTotalSupply(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPastVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getVotes(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      account: string,
      voteId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256)"(
      account: string,
      voteId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    DelegateChanged(
      delegator: string | null,
      fromDelegate: string | null,
      toDelegate: string | null
    ): EventFilter;

    DelegateVotesChanged(
      delegate: string | null,
      previousBalance: null,
      newBalance: null
    ): EventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    burn(voteId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "burn(uint256)"(
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegate(address)"(
      delegatee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegate(address,address)"(
      account: string,
      newDelegation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)"(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegates(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "delegates(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPastTotalSupply(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPastVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getVotes(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      account: string,
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      account: string,
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DOMAIN_SEPARATOR()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(uint256)"(
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegate(address)"(
      delegatee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegate(address,address)"(
      account: string,
      newDelegation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)"(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegates(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegates(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPastTotalSupply(uint256)"(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPastVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotes(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVotes(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      account: string,
      voteId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

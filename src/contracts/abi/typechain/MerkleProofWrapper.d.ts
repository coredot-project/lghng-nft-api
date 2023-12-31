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

interface MerkleProofWrapperInterface extends ethers.utils.Interface {
  functions: {
    "multiProofVerify(bytes32[],bool[],bytes32,bytes32[])": FunctionFragment;
    "multiProofVerifyCalldata(bytes32[],bool[],bytes32,bytes32[])": FunctionFragment;
    "processMultiProof(bytes32[],bool[],bytes32[])": FunctionFragment;
    "processMultiProofCalldata(bytes32[],bool[],bytes32[])": FunctionFragment;
    "processProof(bytes32[],bytes32)": FunctionFragment;
    "processProofCalldata(bytes32[],bytes32)": FunctionFragment;
    "verify(bytes32[],bytes32,bytes32)": FunctionFragment;
    "verifyCalldata(bytes32[],bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "multiProofVerify",
    values: [BytesLike[], boolean[], BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiProofVerifyCalldata",
    values: [BytesLike[], boolean[], BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "processMultiProof",
    values: [BytesLike[], boolean[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "processMultiProofCalldata",
    values: [BytesLike[], boolean[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "processProof",
    values: [BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processProofCalldata",
    values: [BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCalldata",
    values: [BytesLike[], BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "multiProofVerify",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiProofVerifyCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMultiProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMultiProofCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processProofCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyCalldata",
    data: BytesLike
  ): Result;

  events: {};
}

export class MerkleProofWrapper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MerkleProofWrapperInterface;

  functions: {
    multiProofVerify(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "multiProofVerify(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    multiProofVerifyCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "multiProofVerifyCalldata(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    processMultiProof(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    "processMultiProof(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    processMultiProofCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    "processMultiProofCalldata(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    processProof(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "processProof(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    processProofCalldata(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "processProofCalldata(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verify(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyCalldata(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyCalldata(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  multiProofVerify(
    proofs: BytesLike[],
    proofFlag: boolean[],
    root: BytesLike,
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "multiProofVerify(bytes32[],bool[],bytes32,bytes32[])"(
    proofs: BytesLike[],
    proofFlag: boolean[],
    root: BytesLike,
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  multiProofVerifyCalldata(
    proofs: BytesLike[],
    proofFlag: boolean[],
    root: BytesLike,
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "multiProofVerifyCalldata(bytes32[],bool[],bytes32,bytes32[])"(
    proofs: BytesLike[],
    proofFlag: boolean[],
    root: BytesLike,
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  processMultiProof(
    proofs: BytesLike[],
    proofFlag: boolean[],
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  "processMultiProof(bytes32[],bool[],bytes32[])"(
    proofs: BytesLike[],
    proofFlag: boolean[],
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  processMultiProofCalldata(
    proofs: BytesLike[],
    proofFlag: boolean[],
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  "processMultiProofCalldata(bytes32[],bool[],bytes32[])"(
    proofs: BytesLike[],
    proofFlag: boolean[],
    leaves: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  processProof(
    proof: BytesLike[],
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "processProof(bytes32[],bytes32)"(
    proof: BytesLike[],
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  processProofCalldata(
    proof: BytesLike[],
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "processProofCalldata(bytes32[],bytes32)"(
    proof: BytesLike[],
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  verify(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verify(bytes32[],bytes32,bytes32)"(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyCalldata(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyCalldata(bytes32[],bytes32,bytes32)"(
    proof: BytesLike[],
    root: BytesLike,
    leaf: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    multiProofVerify(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "multiProofVerify(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    multiProofVerifyCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "multiProofVerifyCalldata(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    processMultiProof(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    "processMultiProof(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    processMultiProofCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    "processMultiProofCalldata(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    processProof(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "processProof(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    processProofCalldata(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "processProofCalldata(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verify(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyCalldata(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyCalldata(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    multiProofVerify(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "multiProofVerify(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiProofVerifyCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "multiProofVerifyCalldata(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processMultiProof(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "processMultiProof(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processMultiProofCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "processMultiProofCalldata(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processProof(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "processProof(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processProofCalldata(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "processProofCalldata(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verify(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyCalldata(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyCalldata(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    multiProofVerify(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "multiProofVerify(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiProofVerifyCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "multiProofVerifyCalldata(bytes32[],bool[],bytes32,bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      root: BytesLike,
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processMultiProof(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "processMultiProof(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processMultiProofCalldata(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "processMultiProofCalldata(bytes32[],bool[],bytes32[])"(
      proofs: BytesLike[],
      proofFlag: boolean[],
      leaves: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processProof(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "processProof(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processProofCalldata(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "processProofCalldata(bytes32[],bytes32)"(
      proof: BytesLike[],
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verify(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyCalldata(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyCalldata(bytes32[],bytes32,bytes32)"(
      proof: BytesLike[],
      root: BytesLike,
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

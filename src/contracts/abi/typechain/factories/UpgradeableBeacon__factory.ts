/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UpgradeableBeacon } from "../UpgradeableBeacon";

export class UpgradeableBeacon__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    implementation_: string,
    overrides?: Overrides
  ): Promise<UpgradeableBeacon> {
    return super.deploy(
      implementation_,
      overrides || {}
    ) as Promise<UpgradeableBeacon>;
  }
  getDeployTransaction(
    implementation_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(implementation_, overrides || {});
  }
  attach(address: string): UpgradeableBeacon {
    return super.attach(address) as UpgradeableBeacon;
  }
  connect(signer: Signer): UpgradeableBeacon__factory {
    return super.connect(signer) as UpgradeableBeacon__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeableBeacon {
    return new Contract(address, _abi, signerOrProvider) as UpgradeableBeacon;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109d03803806109d08339818101604052810190610032919061024b565b61004e61004361006360201b60201c565b61006b60201b60201c565b61005d8161012f60201b60201c565b5061031b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610142816101c560201b61021c1760201c565b610181576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610178906102fb565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610218826101ed565b9050919050565b6102288161020d565b811461023357600080fd5b50565b6000815190506102458161021f565b92915050565b600060208284031215610261576102606101e8565b5b600061026f84828501610236565b91505092915050565b600082825260208201905092915050565b7f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60008201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000602082015250565b60006102e5603383610278565b91506102f082610289565b604082019050919050565b60006020820190508181036000830152610314816102d8565b9050919050565b6106a68061032a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610078578063715018a6146100965780638da5cb5b146100a0578063f2fde38b146100be575b600080fd5b61007660048036038101906100719190610478565b6100da565b005b610080610131565b60405161008d91906104b4565b60405180910390f35b61009e61015b565b005b6100a861016f565b6040516100b591906104b4565b60405180910390f35b6100d860048036038101906100d39190610478565b610198565b005b6100e261023f565b6100eb816102bd565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61016361023f565b61016d6000610349565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101a061023f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610210576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020790610552565b60405180910390fd5b61021981610349565b50565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b61024761040d565b73ffffffffffffffffffffffffffffffffffffffff1661026561016f565b73ffffffffffffffffffffffffffffffffffffffff16146102bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b2906105be565b60405180910390fd5b565b6102c68161021c565b610305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fc90610650565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104458261041a565b9050919050565b6104558161043a565b811461046057600080fd5b50565b6000813590506104728161044c565b92915050565b60006020828403121561048e5761048d610415565b5b600061049c84828501610463565b91505092915050565b6104ae8161043a565b82525050565b60006020820190506104c960008301846104a5565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061053c6026836104cf565b9150610547826104e0565b604082019050919050565b6000602082019050818103600083015261056b8161052f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006105a86020836104cf565b91506105b382610572565b602082019050919050565b600060208201905081810360008301526105d78161059b565b9050919050565b7f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60008201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000602082015250565b600061063a6033836104cf565b9150610645826105de565b604082019050919050565b600060208201905081810360008301526106698161062d565b905091905056fea264697066735822122015e3bb56072f6a77bd026da55106e1bad41c23b9a527b9f6fa237704232a3cf564736f6c63430008090033";
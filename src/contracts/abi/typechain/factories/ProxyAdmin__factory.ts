/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ProxyAdmin } from "../ProxyAdmin";

export class ProxyAdmin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin;
  }
  connect(signer: Signer): ProxyAdmin__factory {
    return super.connect(signer) as ProxyAdmin__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin;
  }
}

const _abi = [
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
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
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
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
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
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610ccd8061010d6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461012857806399a88ec414610144578063f2fde38b1461016d578063f3b7dead146101965761007b565b8063204e1c7a14610080578063715018a6146100bd5780637eff275e146100d45780638da5cb5b146100fd575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906106f3565b6101d3565b6040516100b49190610741565b60405180910390f35b3480156100c957600080fd5b506100d2610267565b005b3480156100e057600080fd5b506100fb60048036038101906100f69190610788565b61027b565b005b34801561010957600080fd5b506101126102f2565b60405161011f9190610741565b60405180910390f35b610142600480360381019061013d919061090e565b61031b565b005b34801561015057600080fd5b5061016b60048036038101906101669190610788565b610396565b005b34801561017957600080fd5b50610194600480360381019061018f919061097d565b61040d565b005b3480156101a257600080fd5b506101bd60048036038101906101b891906106f3565b610491565b6040516101ca9190610741565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516101fb90610a01565b600060405180830381855afa9150503d8060008114610236576040519150601f19603f3d011682016040523d82523d6000602084013e61023b565b606091505b50915091508161024a57600080fd5b8080602001905181019061025e9190610a42565b92505050919050565b61026f610525565b61027960006105a3565b565b610283610525565b8173ffffffffffffffffffffffffffffffffffffffff16638f283970826040518263ffffffff1660e01b81526004016102bc9190610741565b600060405180830381600087803b1580156102d657600080fd5b505af11580156102ea573d6000803e3d6000fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610323610525565b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b815260040161035f929190610af7565b6000604051808303818588803b15801561037857600080fd5b505af115801561038c573d6000803e3d6000fd5b5050505050505050565b61039e610525565b8173ffffffffffffffffffffffffffffffffffffffff16633659cfe6826040518263ffffffff1660e01b81526004016103d79190610741565b600060405180830381600087803b1580156103f157600080fd5b505af1158015610405573d6000803e3d6000fd5b505050505050565b610415610525565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047c90610baa565b60405180910390fd5b61048e816105a3565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516104b990610c16565b600060405180830381855afa9150503d80600081146104f4576040519150601f19603f3d011682016040523d82523d6000602084013e6104f9565b606091505b50915091508161050857600080fd5b8080602001905181019061051c9190610a42565b92505050919050565b61052d610667565b73ffffffffffffffffffffffffffffffffffffffff1661054b6102f2565b73ffffffffffffffffffffffffffffffffffffffff16146105a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059890610c77565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106ae82610683565b9050919050565b60006106c0826106a3565b9050919050565b6106d0816106b5565b81146106db57600080fd5b50565b6000813590506106ed816106c7565b92915050565b60006020828403121561070957610708610679565b5b6000610717848285016106de565b91505092915050565b600061072b82610683565b9050919050565b61073b81610720565b82525050565b60006020820190506107566000830184610732565b92915050565b61076581610720565b811461077057600080fd5b50565b6000813590506107828161075c565b92915050565b6000806040838503121561079f5761079e610679565b5b60006107ad858286016106de565b92505060206107be85828601610773565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61081b826107d2565b810181811067ffffffffffffffff8211171561083a576108396107e3565b5b80604052505050565b600061084d61066f565b90506108598282610812565b919050565b600067ffffffffffffffff821115610879576108786107e3565b5b610882826107d2565b9050602081019050919050565b82818337600083830152505050565b60006108b16108ac8461085e565b610843565b9050828152602081018484840111156108cd576108cc6107cd565b5b6108d884828561088f565b509392505050565b600082601f8301126108f5576108f46107c8565b5b813561090584826020860161089e565b91505092915050565b60008060006060848603121561092757610926610679565b5b6000610935868287016106de565b935050602061094686828701610773565b925050604084013567ffffffffffffffff8111156109675761096661067e565b5b610973868287016108e0565b9150509250925092565b60006020828403121561099357610992610679565b5b60006109a184828501610773565b91505092915050565b600081905092915050565b7f5c60da1b00000000000000000000000000000000000000000000000000000000600082015250565b60006109eb6004836109aa565b91506109f6826109b5565b600482019050919050565b6000610a0c826109de565b9150819050919050565b610a1f816106a3565b8114610a2a57600080fd5b50565b600081519050610a3c81610a16565b92915050565b600060208284031215610a5857610a57610679565b5b6000610a6684828501610a2d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aa9578082015181840152602081019050610a8e565b83811115610ab8576000848401525b50505050565b6000610ac982610a6f565b610ad38185610a7a565b9350610ae3818560208601610a8b565b610aec816107d2565b840191505092915050565b6000604082019050610b0c6000830185610732565b8181036020830152610b1e8184610abe565b90509392505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610b94602683610b27565b9150610b9f82610b38565b604082019050919050565b60006020820190508181036000830152610bc381610b87565b9050919050565b7ff851a44000000000000000000000000000000000000000000000000000000000600082015250565b6000610c006004836109aa565b9150610c0b82610bca565b600482019050919050565b6000610c2182610bf3565b9150819050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c61602083610b27565b9150610c6c82610c2b565b602082019050919050565b60006020820190508181036000830152610c9081610c54565b905091905056fea26469706673582212201a3af7803fc3f5b755c8e9e6c7817a9549073470a46ebf756f30499868efe64764736f6c63430008090033";

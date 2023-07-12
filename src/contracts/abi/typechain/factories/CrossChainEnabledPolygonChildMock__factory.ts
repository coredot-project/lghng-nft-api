/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CrossChainEnabledPolygonChildMock } from "../CrossChainEnabledPolygonChildMock";

export class CrossChainEnabledPolygonChildMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bridge: string,
    overrides?: Overrides
  ): Promise<CrossChainEnabledPolygonChildMock> {
    return super.deploy(
      bridge,
      overrides || {}
    ) as Promise<CrossChainEnabledPolygonChildMock>;
  }
  getDeployTransaction(
    bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridge, overrides || {});
  }
  attach(address: string): CrossChainEnabledPolygonChildMock {
    return super.attach(address) as CrossChainEnabledPolygonChildMock;
  }
  connect(signer: Signer): CrossChainEnabledPolygonChildMock__factory {
    return super.connect(signer) as CrossChainEnabledPolygonChildMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledPolygonChildMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledPolygonChildMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "actual",
        type: "address",
      },
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
    ],
    name: "InvalidCrossChainSender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [],
    name: "crossChainOwnerRestricted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crossChainRestricted",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523373ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525061dead600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561008657600080fd5b50604051610b22380380610b2283398181016040528101906100a8919061014f565b8060016000819055508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505061017c565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061011c826100f1565b9050919050565b61012c81610111565b811461013757600080fd5b50565b60008151905061014981610123565b92915050565b600060208284031215610165576101646100ec565b5b60006101738482850161013a565b91505092915050565b60805160a05161097b6101a7600039600061030701526000818160e10152610262015261097b6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634b074af5146100515780638da5cb5b1461005b5780639a7c4b7114610079578063f97f518914610095575b600080fd5b61005961009f565b005b6100636100df565b60405161007091906105cb565b60405180910390f35b610093600480360381019061008e91906106b7565b610103565b005b61009d610260565b005b6100a7610303565b6100dd576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b61010b610359565b610113610303565b610149576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061020e3083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506040518060400160405280601c81526020017f63726f73732d636861696e20657865637574696f6e206661696c6564000000008152506103a9565b5061dead600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061025a61042f565b50505050565b7f0000000000000000000000000000000000000000000000000000000000000000600061028b610439565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146102ff5780826040517fef25d32b0000000000000000000000000000000000000000000000000000000081526004016102f692919061072b565b60405180910390fd5b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6002600054141561039f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610396906107b1565b60405180910390fd5b6002600081905550565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516103d3919061084b565b600060405180830381855af49150503d806000811461040e576040519150601f19603f3d011682016040523d82523d6000602084013e610413565b606091505b5091509150610424868383876104a1565b925050509392505050565b6001600081905550565b6000610443610303565b610479576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60608315610504576000835114156104fc576104bc85610517565b6104fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f2906108ae565b60405180910390fd5b5b82905061050f565b61050e838361053a565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008251111561054d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105819190610923565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105b58261058a565b9050919050565b6105c5816105aa565b82525050565b60006020820190506105e060008301846105bc565b92915050565b600080fd5b600080fd5b6000819050919050565b610603816105f0565b811461060e57600080fd5b50565b600081359050610620816105fa565b92915050565b61062f816105aa565b811461063a57600080fd5b50565b60008135905061064c81610626565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261067757610676610652565b5b8235905067ffffffffffffffff81111561069457610693610657565b5b6020830191508360018202830111156106b0576106af61065c565b5b9250929050565b600080600080606085870312156106d1576106d06105e6565b5b60006106df87828801610611565b94505060206106f08782880161063d565b935050604085013567ffffffffffffffff811115610711576107106105eb565b5b61071d87828801610661565b925092505092959194509250565b600060408201905061074060008301856105bc565b61074d60208301846105bc565b9392505050565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b600061079b601f83610754565b91506107a682610765565b602082019050919050565b600060208201905081810360008301526107ca8161078e565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156108055780820151818401526020810190506107ea565b83811115610814576000848401525b50505050565b6000610825826107d1565b61082f81856107dc565b935061083f8185602086016107e7565b80840191505092915050565b6000610857828461081a565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610898601d83610754565b91506108a382610862565b602082019050919050565b600060208201905081810360008301526108c78161088b565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006108f5826108ce565b6108ff8185610754565b935061090f8185602086016107e7565b610918816108d9565b840191505092915050565b6000602082019050818103600083015261093d81846108ea565b90509291505056fea2646970667358221220968a4ef909f9ccefe1ba6d734ca66e36f0eab858ead5842b1a1019f907a2464a64736f6c63430008090033";

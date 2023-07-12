/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20PermitNoRevertMock } from "../ERC20PermitNoRevertMock";

export class ERC20PermitNoRevertMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20PermitNoRevertMock> {
    return super.deploy(overrides || {}) as Promise<ERC20PermitNoRevertMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20PermitNoRevertMock {
    return super.attach(address) as ERC20PermitNoRevertMock;
  }
  connect(signer: Signer): ERC20PermitNoRevertMock__factory {
    return super.connect(signer) as ERC20PermitNoRevertMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PermitNoRevertMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PermitNoRevertMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitThatMayRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b506040518060400160405280601781526020017f45524332305065726d69744e6f5265766572744d6f636b000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280601781526020017f45524332305065726d69744e6f5265766572744d6f636b0000000000000000008152506040518060400160405280601781526020017f45524332305065726d69744e6f5265766572744d6f636b00000000000000000081525081600390805190602001906200010492919062000215565b5080600490805190602001906200011d92919062000215565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a0818152505062000189818484620001d960201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050505062000402565b60008383834630604051602001620001f695949392919062000340565b6040516020818303038152906040528051906020012090509392505050565b8280546200022390620003cc565b90600052602060002090601f01602090048101928262000247576000855562000293565b82601f106200026257805160ff191683800117855562000293565b8280016001018555821562000293579182015b828111156200029257825182559160200191906001019062000275565b5b509050620002a29190620002a6565b5090565b5b80821115620002c1576000816000905550600101620002a7565b5090565b6000819050919050565b620002da81620002c5565b82525050565b6000819050919050565b620002f581620002e0565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200032882620002fb565b9050919050565b6200033a816200031b565b82525050565b600060a082019050620003576000830188620002cf565b620003666020830187620002cf565b620003756040830186620002cf565b620003846060830185620002ea565b6200039360808301846200032f565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003e557607f821691505b60208210811415620003fc57620003fb6200039d565b5b50919050565b60805160a05160c05160e0516101005161012051612125620004526000396000610d2101526000610d6301526000610d4201526000610c7701526000610ccd01526000610cf601526121256000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146102c5578063a9059cbb146102f5578063d505accf14610325578063dd62ed3e1461034157610100565b806370a082311461022b5780637ecebe001461025b57806395d89b411461028b57806396a9fc31146102a957610100565b8063313ce567116100d3578063313ce567146101a15780633408e470146101bf5780633644e515146101dd57806339509351146101fb57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610371565b60405161011a9190611388565b60405180910390f35b61013d60048036038101906101389190611443565b610403565b60405161014a919061149e565b60405180910390f35b61015b610426565b60405161016891906114c8565b60405180910390f35b61018b600480360381019061018691906114e3565b610430565b604051610198919061149e565b60405180910390f35b6101a961045f565b6040516101b69190611552565b60405180910390f35b6101c7610468565b6040516101d491906114c8565b60405180910390f35b6101e5610470565b6040516101f29190611586565b60405180910390f35b61021560048036038101906102109190611443565b61047f565b604051610222919061149e565b60405180910390f35b610245600480360381019061024091906115a1565b6104b6565b60405161025291906114c8565b60405180910390f35b610275600480360381019061027091906115a1565b6104fe565b60405161028291906114c8565b60405180910390f35b61029361054e565b6040516102a09190611388565b60405180910390f35b6102c360048036038101906102be9190611626565b6105e0565b005b6102df60048036038101906102da9190611443565b6105f8565b6040516102ec919061149e565b60405180910390f35b61030f600480360381019061030a9190611443565b61066f565b60405161031c919061149e565b60405180910390f35b61033f600480360381019061033a9190611626565b610692565b005b61035b600480360381019061035691906116c8565b610715565b60405161036891906114c8565b60405180910390f35b60606003805461038090611737565b80601f01602080910402602001604051908101604052809291908181526020018280546103ac90611737565b80156103f95780601f106103ce576101008083540402835291602001916103f9565b820191906000526020600020905b8154815290600101906020018083116103dc57829003601f168201915b5050505050905090565b60008061040e61079c565b905061041b8185856107a4565b600191505092915050565b6000600254905090565b60008061043b61079c565b905061044885828561096f565b6104538585856109fb565b60019150509392505050565b60006012905090565b600046905090565b600061047a610c73565b905090565b60008061048a61079c565b90506104ab81858561049c8589610715565b6104a69190611798565b6107a4565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610547600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610d8d565b9050919050565b60606004805461055d90611737565b80601f016020809104026020016040519081016040528092919081815260200182805461058990611737565b80156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b5050505050905090565b6105ef87878787878787610d9b565b50505050505050565b60008061060361079c565b905060006106118286610715565b905083811015610656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064d90611860565b60405180910390fd5b61066382868684036107a4565b60019250505092915050565b60008061067a61079c565b90506106878185856109fb565b600191505092915050565b3073ffffffffffffffffffffffffffffffffffffffff166396a9fc31888888888888886040518863ffffffff1660e01b81526004016106d7979695949392919061188f565b600060405180830381600087803b1580156106f157600080fd5b505af1925050508015610702575060015b61070b5761070c565b5b50505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080b90611970565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087b90611a02565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161096291906114c8565b60405180910390a3505050565b600061097b8484610715565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109f557818110156109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90611a6e565b60405180910390fd5b6109f484848484036107a4565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6290611b00565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad290611b92565b60405180910390fd5b610ae6838383610edd565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6390611c24565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c5a91906114c8565b60405180910390a3610c6d848484610ee2565b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610cef57507f000000000000000000000000000000000000000000000000000000000000000046145b15610d1c577f00000000000000000000000000000000000000000000000000000000000000009050610d8a565b610d877f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610ee7565b90505b90565b600081600001549050919050565b83421115610dde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd590611c90565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610e0d8c610f21565b89604051602001610e2396959493929190611cb0565b6040516020818303038152906040528051906020012090506000610e4682610f7f565b90506000610e5682878787610f99565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90611d5d565b60405180910390fd5b610ed18a8a8a6107a4565b50505050505050505050565b505050565b505050565b60008383834630604051602001610f02959493929190611d7d565b6040516020818303038152906040528051906020012090509392505050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610f6e81610d8d565b9150610f7981610fc4565b50919050565b6000610f92610f8c610c73565b83610fda565b9050919050565b6000806000610faa8787878761100d565b91509150610fb78161111a565b8192505050949350505050565b6001816000016000828254019250508190555050565b60008282604051602001610fef929190611e48565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115611048576000600391509150611111565b601b8560ff16141580156110605750601c8560ff1614155b15611072576000600491509150611111565b6000600187878787604051600081526020016040526040516110979493929190611e7f565b6020604051602081039080840390855afa1580156110b9573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561110857600060019250925050611111565b80600092509250505b94509492505050565b6000600481111561112e5761112d611ec4565b5b81600481111561114157611140611ec4565b5b141561114c576112ec565b600160048111156111605761115f611ec4565b5b81600481111561117357611172611ec4565b5b14156111b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ab90611f3f565b60405180910390fd5b600260048111156111c8576111c7611ec4565b5b8160048111156111db576111da611ec4565b5b141561121c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121390611fab565b60405180910390fd5b600360048111156112305761122f611ec4565b5b81600481111561124357611242611ec4565b5b1415611284576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127b9061203d565b60405180910390fd5b60048081111561129757611296611ec4565b5b8160048111156112aa576112a9611ec4565b5b14156112eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e2906120cf565b60405180910390fd5b5b50565b600081519050919050565b600082825260208201905092915050565b60005b8381101561132957808201518184015260208101905061130e565b83811115611338576000848401525b50505050565b6000601f19601f8301169050919050565b600061135a826112ef565b61136481856112fa565b935061137481856020860161130b565b61137d8161133e565b840191505092915050565b600060208201905081810360008301526113a2818461134f565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113da826113af565b9050919050565b6113ea816113cf565b81146113f557600080fd5b50565b600081359050611407816113e1565b92915050565b6000819050919050565b6114208161140d565b811461142b57600080fd5b50565b60008135905061143d81611417565b92915050565b6000806040838503121561145a576114596113aa565b5b6000611468858286016113f8565b92505060206114798582860161142e565b9150509250929050565b60008115159050919050565b61149881611483565b82525050565b60006020820190506114b3600083018461148f565b92915050565b6114c28161140d565b82525050565b60006020820190506114dd60008301846114b9565b92915050565b6000806000606084860312156114fc576114fb6113aa565b5b600061150a868287016113f8565b935050602061151b868287016113f8565b925050604061152c8682870161142e565b9150509250925092565b600060ff82169050919050565b61154c81611536565b82525050565b60006020820190506115676000830184611543565b92915050565b6000819050919050565b6115808161156d565b82525050565b600060208201905061159b6000830184611577565b92915050565b6000602082840312156115b7576115b66113aa565b5b60006115c5848285016113f8565b91505092915050565b6115d781611536565b81146115e257600080fd5b50565b6000813590506115f4816115ce565b92915050565b6116038161156d565b811461160e57600080fd5b50565b600081359050611620816115fa565b92915050565b600080600080600080600060e0888a031215611645576116446113aa565b5b60006116538a828b016113f8565b97505060206116648a828b016113f8565b96505060406116758a828b0161142e565b95505060606116868a828b0161142e565b94505060806116978a828b016115e5565b93505060a06116a88a828b01611611565b92505060c06116b98a828b01611611565b91505092959891949750929550565b600080604083850312156116df576116de6113aa565b5b60006116ed858286016113f8565b92505060206116fe858286016113f8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061174f57607f821691505b6020821081141561176357611762611708565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117a38261140d565b91506117ae8361140d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156117e3576117e2611769565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061184a6025836112fa565b9150611855826117ee565b604082019050919050565b600060208201905081810360008301526118798161183d565b9050919050565b611889816113cf565b82525050565b600060e0820190506118a4600083018a611880565b6118b16020830189611880565b6118be60408301886114b9565b6118cb60608301876114b9565b6118d86080830186611543565b6118e560a0830185611577565b6118f260c0830184611577565b98975050505050505050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061195a6024836112fa565b9150611965826118fe565b604082019050919050565b600060208201905081810360008301526119898161194d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006119ec6022836112fa565b91506119f782611990565b604082019050919050565b60006020820190508181036000830152611a1b816119df565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611a58601d836112fa565b9150611a6382611a22565b602082019050919050565b60006020820190508181036000830152611a8781611a4b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611aea6025836112fa565b9150611af582611a8e565b604082019050919050565b60006020820190508181036000830152611b1981611add565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611b7c6023836112fa565b9150611b8782611b20565b604082019050919050565b60006020820190508181036000830152611bab81611b6f565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611c0e6026836112fa565b9150611c1982611bb2565b604082019050919050565b60006020820190508181036000830152611c3d81611c01565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000611c7a601d836112fa565b9150611c8582611c44565b602082019050919050565b60006020820190508181036000830152611ca981611c6d565b9050919050565b600060c082019050611cc56000830189611577565b611cd26020830188611880565b611cdf6040830187611880565b611cec60608301866114b9565b611cf960808301856114b9565b611d0660a08301846114b9565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b6000611d47601e836112fa565b9150611d5282611d11565b602082019050919050565b60006020820190508181036000830152611d7681611d3a565b9050919050565b600060a082019050611d926000830188611577565b611d9f6020830187611577565b611dac6040830186611577565b611db960608301856114b9565b611dc66080830184611880565b9695505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611e11600283611dd0565b9150611e1c82611ddb565b600282019050919050565b6000819050919050565b611e42611e3d8261156d565b611e27565b82525050565b6000611e5382611e04565b9150611e5f8285611e31565b602082019150611e6f8284611e31565b6020820191508190509392505050565b6000608082019050611e946000830187611577565b611ea16020830186611543565b611eae6040830185611577565b611ebb6060830184611577565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611f296018836112fa565b9150611f3482611ef3565b602082019050919050565b60006020820190508181036000830152611f5881611f1c565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611f95601f836112fa565b9150611fa082611f5f565b602082019050919050565b60006020820190508181036000830152611fc481611f88565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006120276022836112fa565b915061203282611fcb565b604082019050919050565b600060208201905081810360008301526120568161201a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006120b96022836112fa565b91506120c48261205d565b604082019050919050565b600060208201905081810360008301526120e8816120ac565b905091905056fea26469706673582212206c9f720b6bfb7c35869d65011924c27205815d74f03f16f78f702b8dacb95f5764736f6c63430008090033";

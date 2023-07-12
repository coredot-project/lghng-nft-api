/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DummyImplementationV2 } from "../DummyImplementationV2";

export class DummyImplementationV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DummyImplementationV2> {
    return super.deploy(overrides || {}) as Promise<DummyImplementationV2>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyImplementationV2 {
    return super.attach(address) as DummyImplementationV2;
  }
  connect(signer: Signer): DummyImplementationV2__factory {
    return super.connect(signer) as DummyImplementationV2__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyImplementationV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DummyImplementationV2;
  }
}

const _abi = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeNonPayable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "initializeNonPayableWithValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializePayable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "initializePayableWithValue",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newVal",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "reverts",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "text",
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
    name: "value",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "values",
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
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a11806100206000396000f3fe6080604052600436106100a75760003560e01c80635e383d21116100645780635e383d21146101775780636d4ce63c146101b4578063763e2831146101df5780639fba1f9a14610208578063d31f8b6b14610212578063e79f5bee1461023b576100a7565b80631f1bd692146100ac578063227367d5146100d75780633bccbbc9146100ee5780633fa4f24514610105578063454b06081461013057806354fd4d501461014c575b600080fd5b3480156100b857600080fd5b506100c1610257565b6040516100ce919061058d565b60405180910390f35b3480156100e357600080fd5b506100ec6102e5565b005b3480156100fa57600080fd5b506101036102ef565b005b34801561011157600080fd5b5061011a610332565b60405161012791906105c8565b60405180910390f35b61014a60048036038101906101459190610623565b610338565b005b34801561015857600080fd5b50610161610342565b60405161016e919061058d565b60405180910390f35b34801561018357600080fd5b5061019e60048036038101906101999190610623565b61037f565b6040516101ab91906105c8565b60405180910390f35b3480156101c057600080fd5b506101c96103a3565b6040516101d6919061066b565b60405180910390f35b3480156101eb57600080fd5b5061020660048036038101906102019190610623565b6103ac565b005b6102106103b6565b005b34801561021e57600080fd5b5061023960048036038101906102349190610883565b6103c0565b005b61025560048036038101906102509190610623565b6103fa565b005b600180546102649061093d565b80601f01602080910402602001604051908101604052809291908181526020018280546102909061093d565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b505050505081565b600a600081905550565b6000610330576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610327906109bb565b60405180910390fd5b565b60005481565b8060008190555050565b60606040518060400160405280600281526020017f5632000000000000000000000000000000000000000000000000000000000000815250905090565b6002818154811061038f57600080fd5b906000526020600020016000915090505481565b60006001905090565b8060008190555050565b6064600081905550565b8260008190555081600190805190602001906103dd929190610404565b5080600290805190602001906103f492919061048a565b50505050565b8060008190555050565b8280546104109061093d565b90600052602060002090601f0160209004810192826104325760008555610479565b82601f1061044b57805160ff1916838001178555610479565b82800160010185558215610479579182015b8281111561047857825182559160200191906001019061045d565b5b50905061048691906104d7565b5090565b8280548282559060005260206000209081019282156104c6579160200282015b828111156104c55782518255916020019190600101906104aa565b5b5090506104d391906104d7565b5090565b5b808211156104f05760008160009055506001016104d8565b5090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561052e578082015181840152602081019050610513565b8381111561053d576000848401525b50505050565b6000601f19601f8301169050919050565b600061055f826104f4565b61056981856104ff565b9350610579818560208601610510565b61058281610543565b840191505092915050565b600060208201905081810360008301526105a78184610554565b905092915050565b6000819050919050565b6105c2816105af565b82525050565b60006020820190506105dd60008301846105b9565b92915050565b6000604051905090565b600080fd5b600080fd5b610600816105af565b811461060b57600080fd5b50565b60008135905061061d816105f7565b92915050565b600060208284031215610639576106386105ed565b5b60006106478482850161060e565b91505092915050565b60008115159050919050565b61066581610650565b82525050565b6000602082019050610680600083018461065c565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106c882610543565b810181811067ffffffffffffffff821117156106e7576106e6610690565b5b80604052505050565b60006106fa6105e3565b905061070682826106bf565b919050565b600067ffffffffffffffff82111561072657610725610690565b5b61072f82610543565b9050602081019050919050565b82818337600083830152505050565b600061075e6107598461070b565b6106f0565b90508281526020810184848401111561077a5761077961068b565b5b61078584828561073c565b509392505050565b600082601f8301126107a2576107a1610686565b5b81356107b284826020860161074b565b91505092915050565b600067ffffffffffffffff8211156107d6576107d5610690565b5b602082029050602081019050919050565b600080fd5b60006107ff6107fa846107bb565b6106f0565b90508083825260208201905060208402830185811115610822576108216107e7565b5b835b8181101561084b5780610837888261060e565b845260208401935050602081019050610824565b5050509392505050565b600082601f83011261086a57610869610686565b5b813561087a8482602086016107ec565b91505092915050565b60008060006060848603121561089c5761089b6105ed565b5b60006108aa8682870161060e565b935050602084013567ffffffffffffffff8111156108cb576108ca6105f2565b5b6108d78682870161078d565b925050604084013567ffffffffffffffff8111156108f8576108f76105f2565b5b61090486828701610855565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061095557607f821691505b602082108114156109695761096861090e565b5b50919050565b7f44756d6d79496d706c656d656e746174696f6e20726576657274656400000000600082015250565b60006109a5601c836104ff565b91506109b08261096f565b602082019050919050565b600060208201905081810360008301526109d481610998565b905091905056fea2646970667358221220e20b3b137fdec133a61f0b3cb40134cc3ab9579c05f67ba216321b194ce8c88964736f6c63430008090033";

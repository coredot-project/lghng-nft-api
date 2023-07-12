/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UUPSUpgradeableLegacyMock } from "../UUPSUpgradeableLegacyMock";

export class UUPSUpgradeableLegacyMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<UUPSUpgradeableLegacyMock> {
    return super.deploy(overrides || {}) as Promise<UUPSUpgradeableLegacyMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UUPSUpgradeableLegacyMock {
    return super.attach(address) as UUPSUpgradeableLegacyMock;
  }
  connect(signer: Signer): UUPSUpgradeableLegacyMock__factory {
    return super.connect(signer) as UUPSUpgradeableLegacyMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSUpgradeableLegacyMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UUPSUpgradeableLegacyMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
    name: "current",
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
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
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
    inputs: [],
    name: "reset",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051610f5d61005f60003960006101930152610f5d6000f3fe6080604052600436106100705760003560e01c806352d1902d1161004e57806352d1902d146100d15780639fa6a6e3146100fc578063d09de08a14610127578063d826f88f1461013e57610070565b80632baeceb7146100755780633659cfe61461008c5780634f1ef286146100b5575b600080fd5b34801561008157600080fd5b5061008a610155565b005b34801561009857600080fd5b506100b360048036038101906100ae9190610909565b610161565b005b6100cf60048036038101906100ca9190610a7c565b61017f565b005b3480156100dd57600080fd5b506100e661018f565b6040516100f39190610af1565b60405180910390f35b34801561010857600080fd5b50610111610248565b60405161011e9190610b25565b60405180910390f35b34801561013357600080fd5b5061013c610259565b005b34801561014a57600080fd5b50610153610265565b005b61015f6000610271565b565b61017c816040518060200160405280600081525060006102cd565b50565b61018b828260006102cd565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461021f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021690610bc3565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6000610254600061049e565b905090565b61026360006104ac565b565b61026f60006104c2565b565b600081600001549050600081116102bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b490610c2f565b60405180910390fd5b6001810382600001819055505050565b60006102d76104cf565b90506102e284610526565b6000835111806102ef5750815b15610300576102fe84846105df565b505b600061032e7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b61060c565b90508060000160009054906101000a900460ff166104975760018160000160006101000a81548160ff0219169083151502179055506103fa85836040516024016103789190610c5e565b6040516020818303038152906040527f3659cfe6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105df565b5060008160000160006101000a81548160ff0219169083151502179055506104206104cf565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461048d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048490610ceb565b60405180910390fd5b61049685610616565b5b5050505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b60006104fd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610665565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61052f8161066f565b61056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056590610d7d565b60405180910390fd5b8061059b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610665565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606106048383604051806060016040528060278152602001610f0160279139610692565b905092915050565b6000819050919050565b61061f81610718565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516106bc9190610e17565b600060405180830381855af49150503d80600081146106f7576040519150601f19603f3d011682016040523d82523d6000602084013e6106fc565b606091505b509150915061070d868383876107d1565b925050509392505050565b6107218161066f565b610760576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075790610d7d565b60405180910390fd5b8061078d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610665565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606083156108345760008351141561082c576107ec8561066f565b61082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082290610e7a565b60405180910390fd5b5b82905061083f565b61083e8383610847565b5b949350505050565b60008251111561085a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088e9190610ede565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108d6826108ab565b9050919050565b6108e6816108cb565b81146108f157600080fd5b50565b600081359050610903816108dd565b92915050565b60006020828403121561091f5761091e6108a1565b5b600061092d848285016108f4565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61098982610940565b810181811067ffffffffffffffff821117156109a8576109a7610951565b5b80604052505050565b60006109bb610897565b90506109c78282610980565b919050565b600067ffffffffffffffff8211156109e7576109e6610951565b5b6109f082610940565b9050602081019050919050565b82818337600083830152505050565b6000610a1f610a1a846109cc565b6109b1565b905082815260208101848484011115610a3b57610a3a61093b565b5b610a468482856109fd565b509392505050565b600082601f830112610a6357610a62610936565b5b8135610a73848260208601610a0c565b91505092915050565b60008060408385031215610a9357610a926108a1565b5b6000610aa1858286016108f4565b925050602083013567ffffffffffffffff811115610ac257610ac16108a6565b5b610ace85828601610a4e565b9150509250929050565b6000819050919050565b610aeb81610ad8565b82525050565b6000602082019050610b066000830184610ae2565b92915050565b6000819050919050565b610b1f81610b0c565b82525050565b6000602082019050610b3a6000830184610b16565b92915050565b600082825260208201905092915050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000610bad603883610b40565b9150610bb882610b51565b604082019050919050565b60006020820190508181036000830152610bdc81610ba0565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000610c19601b83610b40565b9150610c2482610be3565b602082019050919050565b60006020820190508181036000830152610c4881610c0c565b9050919050565b610c58816108cb565b82525050565b6000602082019050610c736000830184610c4f565b92915050565b7f45524331393637557067726164653a207570677261646520627265616b73206660008201527f7572746865722075706772616465730000000000000000000000000000000000602082015250565b6000610cd5602f83610b40565b9150610ce082610c79565b604082019050919050565b60006020820190508181036000830152610d0481610cc8565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000610d67602d83610b40565b9150610d7282610d0b565b604082019050919050565b60006020820190508181036000830152610d9681610d5a565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610dd1578082015181840152602081019050610db6565b83811115610de0576000848401525b50505050565b6000610df182610d9d565b610dfb8185610da8565b9350610e0b818560208601610db3565b80840191505092915050565b6000610e238284610de6565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610e64601d83610b40565b9150610e6f82610e2e565b602082019050919050565b60006020820190508181036000830152610e9381610e57565b9050919050565b600081519050919050565b6000610eb082610e9a565b610eba8185610b40565b9350610eca818560208601610db3565b610ed381610940565b840191505092915050565b60006020820190508181036000830152610ef88184610ea5565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212203f33428e87f4604b161e0d681b16179c235326c498cbc439302c414c57801ede64736f6c63430008090033";
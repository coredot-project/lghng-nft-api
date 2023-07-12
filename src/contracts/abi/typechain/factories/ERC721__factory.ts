/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002579380380620025798339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b60208210811415620003a257620003a162000343565b5b50919050565b6121c180620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906113f8565b6102bc565b6040516100fb9190611440565b60405180910390f35b61010c61039e565b60405161011991906114f4565b60405180910390f35b61013c6004803603810190610137919061154c565b610430565b60405161014991906115ba565b60405180910390f35b61016c60048036038101906101679190611601565b610476565b005b61018860048036038101906101839190611641565b61058e565b005b6101a4600480360381019061019f9190611641565b6105ee565b005b6101c060048036038101906101bb919061154c565b61060e565b6040516101cd91906115ba565b60405180910390f35b6101f060048036038101906101eb9190611694565b6106c0565b6040516101fd91906116d0565b60405180910390f35b61020e610778565b60405161021b91906114f4565b60405180910390f35b61023e60048036038101906102399190611717565b61080a565b005b61025a6004803603810190610255919061188c565b610820565b005b6102766004803603810190610271919061154c565b610882565b60405161028391906114f4565b60405180910390f35b6102a660048036038101906102a1919061190f565b6108ea565b6040516102b39190611440565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061039757506103968261097e565b5b9050919050565b6060600080546103ad9061197e565b80601f01602080910402602001604051908101604052809291908181526020018280546103d99061197e565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109e8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990611a22565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610511610a33565b73ffffffffffffffffffffffffffffffffffffffff161480610540575061053f8161053a610a33565b6108ea565b5b61057f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057690611ab4565b60405180910390fd5b6105898383610a3b565b505050565b61059f610599610a33565b82610af4565b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611b46565b60405180910390fd5b6105e9838383610b89565b505050565b61060983838360405180602001604052806000815250610820565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ae90611bb2565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610731576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072890611c44565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107879061197e565b80601f01602080910402602001604051908101604052809291908181526020018280546107b39061197e565b80156108005780601f106107d557610100808354040283529160200191610800565b820191906000526020600020905b8154815290600101906020018083116107e357829003601f168201915b5050505050905090565b61081c610815610a33565b8383610e1b565b5050565b61083161082b610a33565b83610af4565b610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086790611b46565b60405180910390fd5b61087c84848484610f88565b50505050565b606061088d826109e8565b6000610897610fe4565b905060008151116108b757604051806020016040528060008152506108e2565b806108c184610ffb565b6040516020016108d2929190611ca0565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109f18161115c565b610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790611bb2565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610aae8361060e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b008361060e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b425750610b4181856108ea565b5b80610b8057508373ffffffffffffffffffffffffffffffffffffffff16610b6884610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ba98261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610bff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf690611d36565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6690611dc8565b60405180910390fd5b610c7a8383836111c8565b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d009190611e17565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d579190611e4b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e168383836111cd565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8190611eed565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f7b9190611440565b60405180910390a3505050565b610f93848484610b89565b610f9f848484846111d2565b610fde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd590611f7f565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611043576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611157565b600082905060005b6000821461107557808061105e90611f9f565b915050600a8261106e9190612017565b915061104b565b60008167ffffffffffffffff81111561109157611090611761565b5b6040519080825280601f01601f1916602001820160405280156110c35781602001600182028036833780820191505090505b5090505b60008514611150576001826110dc9190611e17565b9150600a856110eb9190612048565b60306110f79190611e4b565b60f81b81838151811061110d5761110c612079565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856111499190612017565b94506110c7565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111f38473ffffffffffffffffffffffffffffffffffffffff16611369565b1561135c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261121c610a33565b8786866040518563ffffffff1660e01b815260040161123e94939291906120fd565b602060405180830381600087803b15801561125857600080fd5b505af192505050801561128957506040513d601f19601f82011682018060405250810190611286919061215e565b60015b61130c573d80600081146112b9576040519150601f19603f3d011682016040523d82523d6000602084013e6112be565b606091505b50600081511415611304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fb90611f7f565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611361565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113d5816113a0565b81146113e057600080fd5b50565b6000813590506113f2816113cc565b92915050565b60006020828403121561140e5761140d611396565b5b600061141c848285016113e3565b91505092915050565b60008115159050919050565b61143a81611425565b82525050565b60006020820190506114556000830184611431565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561149557808201518184015260208101905061147a565b838111156114a4576000848401525b50505050565b6000601f19601f8301169050919050565b60006114c68261145b565b6114d08185611466565b93506114e0818560208601611477565b6114e9816114aa565b840191505092915050565b6000602082019050818103600083015261150e81846114bb565b905092915050565b6000819050919050565b61152981611516565b811461153457600080fd5b50565b60008135905061154681611520565b92915050565b60006020828403121561156257611561611396565b5b600061157084828501611537565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115a482611579565b9050919050565b6115b481611599565b82525050565b60006020820190506115cf60008301846115ab565b92915050565b6115de81611599565b81146115e957600080fd5b50565b6000813590506115fb816115d5565b92915050565b6000806040838503121561161857611617611396565b5b6000611626858286016115ec565b925050602061163785828601611537565b9150509250929050565b60008060006060848603121561165a57611659611396565b5b6000611668868287016115ec565b9350506020611679868287016115ec565b925050604061168a86828701611537565b9150509250925092565b6000602082840312156116aa576116a9611396565b5b60006116b8848285016115ec565b91505092915050565b6116ca81611516565b82525050565b60006020820190506116e560008301846116c1565b92915050565b6116f481611425565b81146116ff57600080fd5b50565b600081359050611711816116eb565b92915050565b6000806040838503121561172e5761172d611396565b5b600061173c858286016115ec565b925050602061174d85828601611702565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611799826114aa565b810181811067ffffffffffffffff821117156117b8576117b7611761565b5b80604052505050565b60006117cb61138c565b90506117d78282611790565b919050565b600067ffffffffffffffff8211156117f7576117f6611761565b5b611800826114aa565b9050602081019050919050565b82818337600083830152505050565b600061182f61182a846117dc565b6117c1565b90508281526020810184848401111561184b5761184a61175c565b5b61185684828561180d565b509392505050565b600082601f83011261187357611872611757565b5b813561188384826020860161181c565b91505092915050565b600080600080608085870312156118a6576118a5611396565b5b60006118b4878288016115ec565b94505060206118c5878288016115ec565b93505060406118d687828801611537565b925050606085013567ffffffffffffffff8111156118f7576118f661139b565b5b6119038782880161185e565b91505092959194509250565b6000806040838503121561192657611925611396565b5b6000611934858286016115ec565b9250506020611945858286016115ec565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061199657607f821691505b602082108114156119aa576119a961194f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a0c602183611466565b9150611a17826119b0565b604082019050919050565b60006020820190508181036000830152611a3b816119ff565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611a9e603e83611466565b9150611aa982611a42565b604082019050919050565b60006020820190508181036000830152611acd81611a91565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611b30602e83611466565b9150611b3b82611ad4565b604082019050919050565b60006020820190508181036000830152611b5f81611b23565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611b9c601883611466565b9150611ba782611b66565b602082019050919050565b60006020820190508181036000830152611bcb81611b8f565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611c2e602983611466565b9150611c3982611bd2565b604082019050919050565b60006020820190508181036000830152611c5d81611c21565b9050919050565b600081905092915050565b6000611c7a8261145b565b611c848185611c64565b9350611c94818560208601611477565b80840191505092915050565b6000611cac8285611c6f565b9150611cb88284611c6f565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611d20602583611466565b9150611d2b82611cc4565b604082019050919050565b60006020820190508181036000830152611d4f81611d13565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611db2602483611466565b9150611dbd82611d56565b604082019050919050565b60006020820190508181036000830152611de181611da5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e2282611516565b9150611e2d83611516565b925082821015611e4057611e3f611de8565b5b828203905092915050565b6000611e5682611516565b9150611e6183611516565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e9657611e95611de8565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611ed7601983611466565b9150611ee282611ea1565b602082019050919050565b60006020820190508181036000830152611f0681611eca565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611f69603283611466565b9150611f7482611f0d565b604082019050919050565b60006020820190508181036000830152611f9881611f5c565b9050919050565b6000611faa82611516565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611fdd57611fdc611de8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061202282611516565b915061202d83611516565b92508261203d5761203c611fe8565b5b828204905092915050565b600061205382611516565b915061205e83611516565b92508261206e5761206d611fe8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006120cf826120a8565b6120d981856120b3565b93506120e9818560208601611477565b6120f2816114aa565b840191505092915050565b600060808201905061211260008301876115ab565b61211f60208301866115ab565b61212c60408301856116c1565b818103606083015261213e81846120c4565b905095945050505050565b600081519050612158816113cc565b92915050565b60006020828403121561217457612173611396565b5b600061218284828501612149565b9150509291505056fea26469706673582212205148df125fcb4ef6c092d91f8db810426ee271c84c5948ad6e8d30a183ed0b4164736f6c63430008090033";
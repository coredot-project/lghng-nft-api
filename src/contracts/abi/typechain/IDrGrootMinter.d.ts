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
import { Contract, ContractTransaction } from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IDrGrootMinterInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "SetFeeTo(address)": EventFragment;
    "SetMaxSellNumber(uint256)": EventFragment;
    "SetPublicPrice(uint256)": EventFragment;
    "SetTxLimit(uint256)": EventFragment;
    "SetWhitelist(address[])": EventFragment;
    "SetWhitelistPrice(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetFeeTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMaxSellNumber"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPublicPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTxLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetWhitelist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetWhitelistPrice"): EventFragment;
}

export class IDrGrootMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDrGrootMinterInterface;

  functions: {};

  callStatic: {};

  filters: {
    SetFeeTo(feeTo: null): EventFilter;

    SetMaxSellNumber(number: null): EventFilter;

    SetPublicPrice(price: null): EventFilter;

    SetTxLimit(num: null): EventFilter;

    SetWhitelist(wallet: null): EventFilter;

    SetWhitelistPrice(price: null): EventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}

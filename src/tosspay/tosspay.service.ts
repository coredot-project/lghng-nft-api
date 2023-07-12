import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receipt, ReceiptDocument } from '../schemas/receipt.schema';
import DrGrootMinterContract from '../contracts/DrGrootMinterContract';
import {
  TossPayOrder,
  TossPayOrderDocument,
} from '../schemas/tosspayorder.schema';

@Injectable()
export class TossPayService {
  private minterContract: DrGrootMinterContract;

  constructor(
    @InjectModel(TossPayOrder.name)
    private orderModel: Model<TossPayOrderDocument>,
    @InjectModel(Receipt.name) private receiptModel: Model<ReceiptDocument>,
  ) {
    this.minterContract = new DrGrootMinterContract(
      process.env.DR_GROOT_MINTER_ADDRESS,
    );
  }

  async order(order: TossPayOrder): Promise<string> {
    if ((await this.minterContract.whitelists(order.address)) === true) {
      if (
        order.krw !==
        order.quantity * parseInt(process.env.WHITELIST_KRW, 10)
      ) {
        throw new Error('액수가 잘못됐습니다.');
      }
    } else if (
      order.krw !==
      order.quantity * parseInt(process.env.PUBLIC_KRW, 10)
    ) {
      throw new Error('액수가 잘못됐습니다.');
    }
    return (await this.orderModel.create(order))._id.toString();
  }

  async getOrder(orderId: string): Promise<TossPayOrder | null> {
    return await this.orderModel.findById(orderId);
  }

  async saveReceipt(receipt: any): Promise<void> {
    await this.receiptModel.create(receipt);
  }

  async doneOrder(orderId: string): Promise<void> {
    await this.orderModel.findByIdAndUpdate(orderId, { done: true });
  }
}

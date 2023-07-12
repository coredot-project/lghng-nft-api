import { Body, Controller, Post } from '@nestjs/common';
import DrGrootContract from '../contracts/DrGrootContract';
import DrGrootMinterContract from '../contracts/DrGrootMinterContract';
import fetch from 'node-fetch';
import { TossPayOrder } from '../schemas/tosspayorder.schema';
import { TossPayService } from './tosspay.service';

@Controller('tosspay')
export class TossPayController {
  private drgrootContract: DrGrootContract;
  private minterContract: DrGrootMinterContract;

  constructor(private tosspayService: TossPayService) {
    this.drgrootContract = new DrGrootContract(process.env.DR_GROOT_ADDRESS);
    this.minterContract = new DrGrootMinterContract(
      process.env.DR_GROOT_MINTER_ADDRESS,
    );
  }

  @Post('order')
  order(@Body() order: TossPayOrder): Promise<string> {
    return this.tosspayService.order(order);
  }

  @Post('mint')
  async mint(
    @Body() body: { paymentKey: string; orderId: string; amount: number },
  ): Promise<string> {
    const order = await this.tosspayService.getOrder(body.orderId);
    if (order === null) {
      return '주문 내역이 없습니다.';
    }

    // 금액 정보 체크
    if (order.krw !== body.amount) {
      return '결제 금액이 다릅니다.';
    }

    // 잔여 수량 체크
    if (
      (await this.minterContract.sellCount())
        .add(order.quantity)
        .gt(await this.drgrootContract.maxNumber())
    ) {
      return '민팅이 종료됐습니다.';
    }

    const result = await fetch(
      'https://api.tosspayments.com/v1/payments/confirm',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.TOSS_SECRET_KEY}:`,
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );
    const data = await result.json();
    if (data.code !== undefined) {
      return data.message;
    } else {
      await this.tosspayService.saveReceipt(data);
      await this.minterContract.mintByWon(order.address, order.quantity);
      await this.tosspayService.doneOrder(body.orderId);
      return '';
    }
  }
}

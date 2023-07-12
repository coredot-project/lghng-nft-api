import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Receipt, ReceiptSchema } from '../schemas/receipt.schema';
import {
  TossPayOrder,
  TossPayOrderSchema,
} from '../schemas/tosspayorder.schema';
import { TossPayController } from './tosspay.controller';
import { TossPayService } from './tosspay.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TossPayOrder.name, schema: TossPayOrderSchema },
      { name: Receipt.name, schema: ReceiptSchema },
    ]),
  ],
  controllers: [TossPayController],
  providers: [TossPayService],
})
export class TossPayModule {}

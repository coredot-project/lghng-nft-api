import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TossPayOrderDocument = TossPayOrder & Document;

@Schema()
export class TossPayOrder {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  krw: number;

  @Prop()
  done: boolean;
}

export const TossPayOrderSchema = SchemaFactory.createForClass(TossPayOrder);

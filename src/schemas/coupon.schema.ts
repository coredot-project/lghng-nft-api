import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import CouponTypes from '../coupon/coupon.types';
import { Document } from 'mongoose';

export type CouponDocument = Coupon & Document;

@Schema()
export class Coupon {
  @Prop({ required: true })
  type: CouponTypes;

  @Prop()
  tokenId: number;

  @Prop()
  address: string;

  @Prop({ required: true })
  code: string;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);

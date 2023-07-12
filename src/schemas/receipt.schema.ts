import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReceiptDocument = Receipt & Document;

@Schema({ strict: false })
export class Receipt {}

export const ReceiptSchema = SchemaFactory.createForClass(Receipt);

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Klaytn from './contracts/Klaytn';
import { CouponModule } from './coupon/coupon.module';
import { TossPayModule } from './tosspay/tosspay.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB, { dbName: "drgroot" }),
    TossPayModule,
    CouponModule,
  ],
})
export class AppModule {
  constructor() {
    Klaytn.init();
  }
}

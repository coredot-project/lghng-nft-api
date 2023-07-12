import { Controller, Get, Query } from '@nestjs/common';
import Caver from 'caver-js';
import { CouponService } from './coupon.service';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) { }

  @Get('coupons')
  async getCoupons(@Query('signedMessage') signedMessage: string) {
    const address = Caver.utils.recover('My Coupon List', signedMessage as any);
    return await this.couponService.getCoupons(
      Caver.utils.toChecksumAddress(address),
    );
  }
}

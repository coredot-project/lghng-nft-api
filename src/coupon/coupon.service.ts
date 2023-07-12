import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as fs from 'fs';
import { Model } from 'mongoose';
import DrGrootContract from '../contracts/DrGrootContract';
import { Coupon, CouponDocument } from '../schemas/coupon.schema';
import CouponTypes from './coupon.types';

@Injectable()
export class CouponService {
  private drgrootContract: DrGrootContract;

  constructor(
    @InjectModel(Coupon.name) private conponModel: Model<CouponDocument>,
  ) {
    this.drgrootContract = new DrGrootContract(process.env.DR_GROOT_ADDRESS);
    //this.deleteDiscount5PercentCoupons();
    //this.giveawayFirstPurchaserCoupons();
    //this.giveawayMonthlyCoupons();
  }

  async deleteDiscount5PercentCoupons() {
    console.log("started deleteDiscount5PercentCoupons");
    await this.conponModel.deleteMany({ type: CouponTypes.DISCOUNT_5PERCENT });
    await this.conponModel.deleteMany({ type: CouponTypes.FIRST_PURCHASER });
  }

  // 제품은 NFT 구매한 수량만큼 쿠폰으로 제공되며, 오픈씨로 NFT를 판매하여 다른 홀더가 소유자가 된 경우에는 제품교환 쿠폰을 볼 수 없다.
  private async giveawayFirstPurchaserCoupons() {
    const codes = fs
      .readFileSync('first-purchaser-codes', 'utf8')
      .toString()
      .split('\n');

    for (const [tokenId, code] of codes.entries()) {
      if (tokenId > 2299) {
        await this.conponModel.create({
          tokenId,
          code,
          type: CouponTypes.FIRST_PURCHASER,
        });
        console.log(`${code} ${tokenId} saved.`);
      }
    }
    console.log('done.');
  }

  // 5%쿠폰은 지갑 ID당 1개씩만 발행됩니다. 또한 매월 10일에 닥그 NFT 보유여부 확인 후, 없는 경우에는 표시하지 않고, 새롭게 오픈씨를 통해 구매한 사용자의 경우는 구매한 월 기준으로 당월 10일이 지나지 않은 경우는 10일에 지난 경우에는 다음달 10일에 갱신된 5% 쿠폰을 볼 수 있습니다.
  private async giveawayMonthlyCoupons() {
    const codes = fs
      .readFileSync('monthly-codes', 'utf8')
      .toString()
      .split('\n');
    const totalSupply = (await this.drgrootContract.totalSupply()).toNumber();
    const owners: string[] = [];
    for (let i = 0; i < totalSupply; i += 1) {
      const owner = await this.drgrootContract.ownerOf(i);
      if (owners.includes(owner) !== true) {
        owners.push(owner);
      }
    }
    if (codes.length < owners.length) {
      throw new Error('쿠폰 개수가 홀더수보다 적습니다.');
    }
    for (const [index, owner] of owners.entries()) {
      await this.conponModel.create({
        address: owner,
        code: codes[index],
        type: CouponTypes.DISCOUNT_5PERCENT,
      });
      console.log(owner);
      console.log(codes[index]);
      console.log(`${codes[index]} saved!!`);
    }
    console.log('done.');
  }

  async getCoupons(address: string): Promise<CouponDocument[]> {
    const promises: Promise<void>[] = [];
    const balance = await this.drgrootContract.balanceOf(address);
    const tokenIds: number[] = [];
    for (let i = 0; i < balance.toNumber(); i += 1) {
      const promise = async (index: number) => {
        const tokenId = await this.drgrootContract.tokenOfOwnerByIndex(
          address,
          index,
        );
        if ((await this.drgrootContract.firstPurchaser(tokenId)) === address) {
          tokenIds.push(tokenId.toNumber());
        }
      };
      promises.push(promise(i));
    }
    await Promise.all(promises);
    return await this.conponModel.find({
      $or: [{ tokenId: { $in: tokenIds } }, { address }],
    });
  }
}

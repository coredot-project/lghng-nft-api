/*
1. 5%쿠폰은 지갑 ID당 1개씩만 발행됩니다. 또한 매월 10일에 닥그 NFT 보유여부 확인 후, 없는 경우에는 표시하지 않고, 새롭게 오픈씨를 통해 구매한 사용자의 경우는 구매한 월 기준으로 당월 10일이 지나지 않은 경우는 10일에 지난 경우에는 다음달 10일에 갱신된 5% 쿠폰을 볼 수 있습니다.
2. 제품은 NFT 구매한 수량만큼 쿠폰으로 제공되며, 오픈씨로 NFT를 판매하여 다른 홀더가 소유자가 된 경우에는 제품교환 쿠폰을 볼 수 없다.
*/

enum CouponTypes {
  DISCOUNT_5PERCENT = 'DISCOUNT_5PERCENT',
  FIRST_PURCHASER = 'FIRST_PURCHASER',
}

export default CouponTypes;

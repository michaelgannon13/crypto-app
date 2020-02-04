export default class Returns {

  toTimestamp(date) {
    return new Date(date).getTime();
   }

  calculateReturnPercent(purchasePrice: number, actualPrice: number) {
    const percentReturn = (
      Math.abs(Number(purchasePrice) - Number(actualPrice)) /
      ((Number(purchasePrice) + Number(actualPrice)) / 2)) * 100;
    return percentReturn;
  }

  calculateReturnPrice(coinQuantity, purchasePrice, actualPrice) {
    const priceReturn = ((purchasePrice * coinQuantity) - (actualPrice * coinQuantity));
    return priceReturn;
  }
}

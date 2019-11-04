export default class Returns {

  toTimestamp(date) {
    const timestamp = Date.parse(date);
    return timestamp / 1000;
   }

  calculateReturnPercent(purchasePrice, actualPrice) {
    const percentReturn: number = ((purchasePrice - actualPrice) / (purchasePrice)) * 100;
    return percentReturn;
  }

  calculateReturnPrice(purchasePrice, actualPrice, coinQuantity) {
    const priceReturn: number = ((purchasePrice * coinQuantity) - (actualPrice * coinQuantity));
    return priceReturn;
  }
}

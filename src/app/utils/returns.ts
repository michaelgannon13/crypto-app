export default class Returns {

  toTimestamp(date) {
    const timestamp = Date.parse(date);
    return timestamp / 1000;
   }

   // it's happening here
  calculateReturnPercent(purchasePrice, actualPrice) {
    // const test = purchasePrice;
    // console.log('this is', test);
    const percentReturn = ((purchasePrice - actualPrice) / (purchasePrice)) * 100;
    // alert(percentReturn);
    return percentReturn;
  }

  calculateReturnPrice(purchasePrice, actualPrice, coinQuantity) {
    const priceReturn = ((purchasePrice * coinQuantity) - (actualPrice * coinQuantity));
    return priceReturn;
  }
}

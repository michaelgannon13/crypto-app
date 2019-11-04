import { Component } from '@angular/core';
import { GetPricesService } from './services/prices/get-prices.service';
import { CoinsService } from './services/coins/coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  coinResponse;
  coins;
  selectedCoin = 'BTC';
  selectedCoinId = 0;
  selectedDate = '07/04/1990';
  selectedQuantity = '0';
  coinData;

  actualCoinPrice;
  purchasedCoinPrice;
  selectedDateStamp;
  returnPercent;
  returnPrice;

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.coinsService.getCoins()
    .subscribe((res: any[]) => {
      this.coinResponse = res;
      this.coins = this.coinResponse.data.coins;
    });
  }

  selectCoin(coinName, coinId) {
    this.selectedCoin = coinName;
    this.selectedCoinId = coinId;
  }

  selectDate(date) {
    this.selectedDate = date;
  }

  selectQuantity(quantity) {
    this.selectedQuantity = quantity;
  }

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

  calculateReturn() {
    this.priceService.getCoinData(this.selectedCoinId)
      .subscribe((res: any[]) => {
        this.coinData = res;
        // gets last item in last array
        const lastItem = this.coinData.data.history.pop();
        // gets last items price
        this.actualCoinPrice = lastItem.price;
        // coverts selected date to timestamp
        this.selectedDateStamp = this.toTimestamp(this.selectedDate);

        const coinHistory = this.coinData.data.history;

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < coinHistory.length; i ++ ) {

          let actualItem;
          if (coinHistory[i].timestamp === this.selectedDateStamp * 1000) {
              actualItem = coinHistory[i];
              this.purchasedCoinPrice = actualItem.price;
            }
          }

        this.returnPercent = this.calculateReturnPercent(this.purchasedCoinPrice, this.actualCoinPrice);
        console.log('percentage difference is ', this.returnPercent);

        this.returnPrice = this.calculateReturnPrice(this.selectedQuantity, this.purchasedCoinPrice, this.actualCoinPrice);
        console.log('price difference is ', this.returnPrice);
      });
  }
}

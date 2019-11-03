import { Component } from '@angular/core';
import { GetPricesService } from './services/prices/get-prices.service';
import { CoinsService } from './services/coins/coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-app';
  coinRes;
  coins;
  selectedCoin = 'BTC';
  selectedCoinId = 0;
  selectedDate = '07/04/1990';
  selectedQuantity = '0';
  coinData;

  coinPriceToday;
  coinPriceWhenPurchased;
  coinTimeToday;
  selectedDateStamp;

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  selectCoin(selectCoin, selectCoinId) {
    this.selectedCoin = selectCoin;
    this.selectedCoinId = selectCoinId;
  }

  selectDate(selectDate) {
    this.selectedDate = selectDate;
  }

  selectQuantity(selectQuantity) {
    this.selectedQuantity = selectQuantity;
  }

   toTimestamp(strDate) {
    const datum = Date.parse(strDate);
    return datum / 1000;
   }

  calculate() {

    this.priceService.getCoinData(this.selectedCoinId)
      .subscribe((res: any[]) => {
        this.coinData = res;
        // gets last item in last array
        const lastItem = this.coinData.data.history.pop();
        // gets last items price
        this.coinPriceToday = lastItem.price;
        // gets last items timestamp
        this.coinTimeToday = lastItem.timestamp;
        // coverts selected date to timestamp
        this.selectedDateStamp = this.toTimestamp(this.selectedDate);

        const allHistory = this.coinData.data.history;

        // tslint:disable-next-line:forin
        for (let key = 0; key < allHistory.length; key ++ ) {

          let found;

          if (allHistory[key].timestamp === this.selectedDateStamp * 1000) {
            found = allHistory[key];

            this.coinPriceWhenPurchased = found.price;

            console.log('found is', found.timestamp, 'timestamp is', this.selectedDateStamp * 1000);
            console.log('coin price at time of purchase ', this.coinPriceWhenPurchased);
            console.log('coin price today ', this.coinPriceToday);
          }
        }

      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.coinsService.getCoins()
    .subscribe((res: any[]) => {
      this.coinRes = res;
      this.coins = this.coinRes.data.coins;
      // console.log(this.coins);
    });
  }
}

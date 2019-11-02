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
  coinTimeToday;
  selectedDateStamp;

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  selectCoin(selectCoin, selectCoinId) {
    console.log('target value is ', selectCoin, selectCoinId);
    this.selectedCoin = selectCoin;
    this.selectedCoinId = selectCoinId;
  }

  selectDate(selectDate) {
    console.log('selection made', selectDate);
    this.selectedDate = selectDate;
  }

  selectQuantity(selectQuantity) {
    console.log('selection made', selectQuantity);
    this.selectedQuantity = selectQuantity;
  }

   toTimestamp(strDate){
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
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.coinsService.getCoins()
    .subscribe((res: any[]) => {
      this.coinRes = res;
      this.coins = this.coinRes.data.coins;
      console.log(this.coins);
    });
  }
}

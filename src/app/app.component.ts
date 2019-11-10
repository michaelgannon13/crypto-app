import { Component } from '@angular/core';
import { GetPricesService } from './services/prices/get-prices.service';
import { CoinsService } from './services/coins/coins.service';
import Returns from './utils/returns';

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
  returns = new Returns();

  actualCoinPrice;
  purchasedCoinPrice: any;
  selectedDateStamp: any;
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

  selectCoin(name, id) {
    this.selectedCoin = name;
    this.selectedCoinId = id;
  }

  selectDate(date) {
    this.selectedDate = date;
  }

  selectQuantity(quantity) {
    this.selectedQuantity = quantity;
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
      this.selectedDateStamp = this.returns.toTimestamp(this.selectedDate);

      const coinHistory = this.coinData.data.history;

      for (let i = 0; i < coinHistory.length; i ++ ) {

        let actualItem;
        if (coinHistory[i].timestamp === this.selectedDateStamp * 1000) {
              actualItem = coinHistory[i];
              this.purchasedCoinPrice = actualItem.price;
            }
          }

        this.returnPercent = this.returns.calculateReturnPercent(this.purchasedCoinPrice, this.actualCoinPrice);
        this.returnPrice = this.returns.calculateReturnPrice(this.selectedQuantity, this.purchasedCoinPrice, this.actualCoinPrice);
      });
  }
}

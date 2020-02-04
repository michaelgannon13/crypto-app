import { Component, Input } from '@angular/core';
import { GetPricesService } from './services/prices/get-prices.service';
import Returns from './utils/returns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  coinData;
  actualCoinPrice = 0;
  purchasedCoinPrice = 0;
  selectedDateStamp: any;
  selectedCoinId = 1;
  selectedCurrency = 'EUR';
  calculated = false;
  currencySymbol = '€';

  // USD EUR JPY BTC ETH etc.

  returnPercent;
  returnPrice;
  selectedDate;
  // default selection is BTC, ID = 1
  selectedCoin;
  selectedQuantity;

  returns = new Returns();

  constructor(
      private priceService: GetPricesService
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  selectCoin(coinInput) {
    this.selectedCoinId = coinInput;
  }

  selectDate(dateInput: any) {
    this.selectedDate = dateInput;
  }

  selectQuantity(quantityInput: any) {
    this.selectedQuantity = quantityInput;
  }

  selectCurrency(currencyInput: any, currencySymbol) {
    this.selectedCurrency = currencyInput;
  }

  selectSymbol(currencySymbol) {
    this.currencySymbol = currencySymbol;
  }

  calculateReturn() {

    this.calculated = true;

    // clear previous values
    this.priceService.getCoinData(this.selectedCoinId, this.selectedCurrency)
    .subscribe((res: any) => {
      this.coinData = res;
      // most recent price of coin
      const lastItem = this.coinData.data.history.pop();
      this.actualCoinPrice = lastItem.price;
      this.selectedDateStamp = this.returns.toTimestamp(this.selectedDate);
      const coinHistory = this.coinData.data.history;

      const elementHistory = coinHistory.find((elem) => elem.timestamp === this.selectedDateStamp);
      this.purchasedCoinPrice = elementHistory.price;

      this.returnPercent = this.returns.calculateReturnPercent(this.purchasedCoinPrice, this.actualCoinPrice);
      this.returnPrice = this.returns.calculateReturnPrice(this.selectedQuantity, this.purchasedCoinPrice, this.actualCoinPrice);

      if (this.returnPrice < 0) {
        console.log('youve lost money because ', this.returnPrice, 'is negative');
      } else {
        console.log('youve made money because ', this.returnPrice, 'is positive');
      }
    });
  }
}

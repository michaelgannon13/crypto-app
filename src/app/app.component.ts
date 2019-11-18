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
  // USD EUR JPY BTC ETH etc.

  @Input() returnPercent;
  @Input() returnPrice;
  @Input() selectedDate;
  // default selection is BTC, ID = 1
  @Input() selectedCoin;
  @Input() selectedQuantity;

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

  selectCurrency(currencyInput: any) {
    this.selectedCurrency = currencyInput;
  }

  calculateReturn() {

    // clear previous values
    this.priceService.getCoinData(this.selectedCoinId, this.selectedCurrency)
    .subscribe((res: any[]) => {
      this.coinData = res;
      const lastItem = this.coinData.data.history.pop();
      this.actualCoinPrice = lastItem.price;
      this.selectedDateStamp = this.returns.toTimestamp(this.selectedDate);
      const coinHistory = this.coinData.data.history;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < coinHistory.length; i ++ ) {

        if (coinHistory[i].timestamp === this.selectedDateStamp * 1000) {
            let actualItem;
            actualItem = coinHistory[i];
            this.purchasedCoinPrice = actualItem.price;
        }
      }
      this.returnPercent = this.returns.calculateReturnPercent(this.purchasedCoinPrice, this.actualCoinPrice);
      this.returnPrice = this.returns.calculateReturnPrice(this.selectedQuantity, this.purchasedCoinPrice, this.actualCoinPrice);
      });
  }
}

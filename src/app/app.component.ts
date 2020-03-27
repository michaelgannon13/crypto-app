import { Component, Input } from '@angular/core';
import { GetPricesService } from './services/prices/get-prices.service';
import Returns from './utils/returns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  returns = new Returns();

  coinData;
  actualCoinPrice = 0;
  purchasedCoinPrice = 0;
  selectedDateStamp: any;
  selectedCoinId = 1;
  selectedCurrency = 'USD';
  calculated = false;
  currencySymbol = '$';
  returnPercent;
  returnPrice;
  selectedDate;
  selectedCoin;
  selectedQuantity;


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

  // selectCurrency(currencyInput: any, currencySymbol) {
  //   this.selectedCurrency = currencyInput;
  //   console.log(  this.selectedCurrency);
  // }

  selectSymbol(currencySymbol) {
    this.currencySymbol = currencySymbol;
  }

  calculateReturn() {
    this.calculated = true;

    // clear previous values
    this.priceService.getCoinData(this.selectedCoinId, this.selectedCurrency)
    .subscribe((res: any) => {
      this.coinData = res;
      const coinHistory = this.coinData.data.history;

      // MOST RECENT STUFF
      // most recent price of coin - right now down to hour - this can cause slight discrepency
      this.actualCoinPrice = this.coinData.data.history.pop().price;



      // CONVERSIONS
      // converts selected date into time stamp
      this.selectedDateStamp = this.returns.toTimestamp(this.selectedDate);



      // PRICES WHEN THEY WERE PURCHASED
      // elementHistory is the price the coin was on the date selected
      const elementHistory = coinHistory.find((elem) => elem.timestamp === this.selectedDateStamp);
      this.purchasedCoinPrice = elementHistory.price;




      /// FINAL CALCULATION
      this.returnPercent = this.returns.calculateReturnPercent(this.purchasedCoinPrice, this.actualCoinPrice);
      this.returnPrice = this.returns.calculateReturnPrice(this.selectedQuantity, this.purchasedCoinPrice, this.actualCoinPrice);

    });
  }
}

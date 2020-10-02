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

  selectedCoinId: number = 1;
  selectedCurrency: string = 'USD';
  calculated: boolean = false;
  currencySymbol: string = '$';
  returnPercent: number;
  returnPrice: number;
  selectedDate;
  selectedCoin: string;
  selectedQuantity: number;


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

  calculateReturn() {
    this.calculated = true;

    // clear previous values
    this.priceService.getCoinData(this.selectedCoinId, this.selectedCurrency)
    .subscribe((res: any) => {
      const coinHistory = res.data.history;

      // most recent price of coin - right now down to hour - this can cause slight discrepency
      const actualCoinPrice = coinHistory.pop().price;

      const selectedDateStamp = this.returns.toTimestamp(this.selectedDate);

      // elementHistory is the price the coin was on the date selected
      const elementHistory = coinHistory.find((elem) => elem.timestamp === selectedDateStamp);
      const purchasedCoinPrice = elementHistory.price;

      this.returnPercent = this.returns.calculateReturnPercent(purchasedCoinPrice, actualCoinPrice);
      this.returnPrice = this.returns.calculateReturnPrice(this.selectedQuantity, purchasedCoinPrice, actualCoinPrice);

    });
  }
}

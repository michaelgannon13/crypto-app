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
  selectedDate = '07/04/1990';
  selectedQuantity = '0';

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  selectCoin(selectCoin) {
    console.log('selection made', selectCoin);
    this.selectedCoin = selectCoin;
  }

  selectDate(selectDate) {
    console.log('selection made', selectDate);
    this.selectedDate = selectDate;
  }

  selectQuantity(selectQuantity) {
    console.log('selection made', selectQuantity);
    this.selectedQuantity = selectQuantity;
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

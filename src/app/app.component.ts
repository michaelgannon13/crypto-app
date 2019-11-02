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
  selectedCoin;
  selectedDate;
  selectedQuantity;

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  selectCoin(selectedCoin) {
    console.log('selection made', selectedCoin);
    this.selectCoin = selectedCoin;
  }

  selectDate(selectedDate) {
    console.log('selection made', selectedDate);
    this.selectDate = selectedDate;
  }

  selectQuantity(selectedQuantity) {
    console.log('selection made', selectedQuantity);
    this.selectedQuantity = selectedQuantity;
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

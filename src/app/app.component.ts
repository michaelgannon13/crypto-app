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
  prices: any;
  btcName;
  btcValue;
  euroSymbol;
  time;
  coinRes;
  coins;
  selectedCoin;

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  selectCoin(selectedCoin) {
    console.log('selection made', selectedCoin);
    this.selectCoin = selectedCoin;
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

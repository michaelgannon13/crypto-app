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

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  constructor(
      private priceService: GetPricesService,
      private coinsService: CoinsService
  ) { }

  ngOnInit() {
    this.priceService.getBTC()
    .subscribe((res: any[]) => {
      this.prices = res;
      this.btcName = this.prices.data.coin.name;
      this.btcValue = this.prices.data.coin.price;
      this.euroSymbol = this.prices.data.base.sign;
    });

    this.coinsService.getCoins()
    .subscribe((res: any[]) => {
      this.coinRes = res;
      this.coins = this.coinRes.data.coins;
      console.log(this.coins);
    });
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}

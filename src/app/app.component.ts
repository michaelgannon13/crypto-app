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

  constructor(private priceService: GetPricesService, private coinsService: CoinsService) { }

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
}

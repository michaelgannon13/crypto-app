import { Component } from '@angular/core';
import { GetPricesService } from './services/prices/get-prices.service';

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

  constructor(private priceService: GetPricesService) { }


  ngOnInit() {
    this.priceService.getBTC()
    .subscribe((res: any[]) => {
      this.prices = res;
      this.btcName = this.prices.data.coin.name;
      this.btcValue = this.prices.data.coin.price;
      this.euroSymbol = this.prices.data.base.sign;
      console.log(this.prices);
    });
  }
}

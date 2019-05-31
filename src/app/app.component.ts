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

  constructor(private priceService: GetPricesService) { }


  ngOnInit() {
    this.priceService.getBTC()
    .subscribe((res: any[]) => {
      this.prices = res;
      console.log(this.prices);
    });
  }
}

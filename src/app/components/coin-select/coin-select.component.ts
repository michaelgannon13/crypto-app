import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoinsService } from '../../services/coins/coins.service';

@Component({
  selector: 'app-coin-select',
  templateUrl: './coin-select.component.html',
  styleUrls: ['./coin-select.component.scss']
})
export class CoinSelectComponent implements OnInit {
  coinResponse;
  coins;

  @Output() coinSelect = new EventEmitter();

  constructor(private coinsService: CoinsService) { }

  ngOnInit() {
    this.coinsService.getCoins()
    .subscribe((res: any[]) => {
      this.coinResponse = res;
      this.coins = this.coinResponse.data.coins;
      console.log('coins', this.coins);
    });
  }

  selectCoin(id) {
    this.coinSelect.emit(id);
  }
}

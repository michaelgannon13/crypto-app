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
  selectedCoin = 'Select Coin';
  selectedCoinImage;

  @Output() coinSelect = new EventEmitter();

  constructor(private coinsService: CoinsService) { }

  ngOnInit() {
    this.coinsService.getCoins()
    .subscribe((res: any[]) => {
      this.coinResponse = res;
      this.coins = this.coinResponse.data.coins;
      console.log(this.coinResponse);

    });
  }

  selectCoin(id, name, image) {
    this.selectedCoin = name;
    this.selectedCoinImage = image;
    this.coinSelect.emit(id);
  }
}

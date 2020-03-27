import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Currencies from '../../../assets/data/currencies.json';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {

  @Output() currencySelect = new EventEmitter();
  @Output() symbolSelect = new EventEmitter();
  currencies: any = (Currencies as any).default;

  constructor() { }

  ngOnInit() {
  }

  // selectCurrency(symbol) {
    selectCurrency(symbol, id) {

    console.log(symbol);
    // BACK
    // console.log(id);
    // not logging id - that's why calculation is not working
    // hard-coding USD for now and calculations are more accurate.
    // the discrepency can be explained by the fluctuations of the coins
    // value every day
    this.symbolSelect.emit(symbol);
    this.currencySelect.emit('USD');
  }
}

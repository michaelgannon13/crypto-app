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

  selectCurrency(symbol, currency) {
    this.symbolSelect.emit(symbol);
    this.currencySelect.emit(currency);
  }
}

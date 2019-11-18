import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Currencies from '../../assets/data/currencies.json';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {

  @Output() currencySelect = new EventEmitter();
  currencies: any = (Currencies as any).default;

  constructor() { }

  ngOnInit() {
  }

  selectCurrency(currency) {
    this.currencySelect.emit(currency);
  }

}

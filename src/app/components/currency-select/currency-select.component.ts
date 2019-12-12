import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Currencies from '../../../assets/data/currencies.json';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {

  selectedCurrency = 'Select Currency';
  currencies: any = (Currencies as any).default;

  @Output() currencySelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectCurrency(code, name) {
    this.selectCurrency = name;
    this.currencySelect.emit(code);
  }

}

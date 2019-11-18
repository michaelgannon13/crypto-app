import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as Currencies from '../../assets/data/currencies.json';
import Currencies from '../../assets/data/currencies.json';


@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {

  @Output() currencySelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const currencies = Currencies;
    console.log('currencies are ', currencies);
  }

  selectCurrency(currency) {
    this.currencySelect.emit(currency);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {

  @Output() currencySelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectCurrency(currency) {
    this.currencySelect.emit(currency);
  }

}

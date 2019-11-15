import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.scss']
})
export class QuantitySelectComponent implements OnInit {

  @Output() quantitySelect = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  selectQuantity(quantity) {
    // const test = quantity;
    this.quantitySelect.emit(quantity);
  }

}

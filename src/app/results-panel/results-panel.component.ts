import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.scss']
})
export class ResultsPanelComponent implements OnInit {

  returnPercent;
  returnPrice;
  selectedDate;
  // default selection is BTC, ID = 1
  selectedCoin;
  selectedQuantity;

  constructor() { }

  ngOnInit() {

    console.log(this.returnPrice);
    console.log(this.selectedCoin);
    console.log(this.returnPercent);
    console.log(this.selectedQuantity);
    console.log(this.returnPrice);
  }

}

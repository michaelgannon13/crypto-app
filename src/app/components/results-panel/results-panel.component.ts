import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.scss']
})
export class ResultsPanelComponent implements OnInit {

// TODO: change Inputs to ng-content
  @Input() returnPercent;
  @Input() returnPrice;
  @Input() selectedDate;
  @Input() selectedCoin;
  @Input() selectedQuantity;
  @Input() selectedCurrency;

  constructor() { }

  ngOnInit() {
  }

}

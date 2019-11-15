import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss']
})
export class DateSelectComponent implements OnInit {
  selectedDate = '07/04/1990';
  @Output() dateSelect = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  selectDate(date) {
    this.selectedDate = date;
    this.dateSelect.emit(this.selectedDate)
  }
}

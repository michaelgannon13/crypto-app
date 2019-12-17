import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements OnInit {

  constructor() { }

  divs = [];

  ngOnInit() {
    for (let i = 0; i < 149; i++) {
      this.divs.push(i);
    }
  }
}

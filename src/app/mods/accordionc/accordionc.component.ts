import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordionc',
  templateUrl: './accordionc.component.html',
  styleUrls: ['./accordionc.component.css'],
})
export class AccordioncComponent implements OnInit {
  @Input() items = [];
  openedItemIndex = 0;
  constructor() {}

  ngOnInit(): void {}
  onClick(index: number): void {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}

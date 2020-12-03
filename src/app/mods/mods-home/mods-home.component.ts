import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why ?', content: 'Just because' },
    { title: 'What ?', content: 'Dont know' },
    { title: 'When ?', content: 'Today?' },
  ];
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.modalOpen = !this.modalOpen;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, lable: '# of users' },
    { value: 900, lable: 'Revenue' },
    { value: 50, lable: 'Reviews' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      desc: 'This is a very good couch',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      desc: 'This dresser is WOW',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

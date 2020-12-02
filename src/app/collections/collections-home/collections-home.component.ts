import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Gal', age: 43, job: 'Full-Stack' },
    { name: 'May', age: 35, job: 'Business Owner' },
    { name: 'Hili', age: 33, job: 'Cleaning' },
  ];
  headers = [
    { key: 'name', lable: 'Name' },
    { key: 'age', lable: 'Age' },
    { key: 'job', lable: 'Job' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

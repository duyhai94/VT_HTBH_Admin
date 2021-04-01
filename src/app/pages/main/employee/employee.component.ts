import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
export interface modelF {
  width: string;
  heigth: string;
  cssClass: string;
  title: {
    text: string;
    status: string;
  };
  list: {
    label: string;
    conditon: 'name';
    value: string;
  };
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  data = {
    width: '400px',
    heigth: '',
    cssClass: 'base-card',
    title: {
      text: 'Chi tiết nhân viên bán hàng - #23535',
      status: '',
    },
    list: [
      {
        label: 'text',
        value: '123456',
      },
      {
        label: 'text',
        value: '123456',
      },
      {
        label: 'text',
        value: '123456',
      },
      {
        label: 'text',
        value: '123456',
      },
      {
        label: 'text',
        value: '123456',
      },
      {
        label: 'text',
        value: '123456',
      },
      {
        label: 'text',
        value: '123456',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}

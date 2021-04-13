import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dataContract = {
    width: 'auto',
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


  dataSeller = {
    width: 'auto',
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

  dataPeople = {
    width: 'auto',
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
  constructor() { }

  ngOnInit(): void {
  }


}

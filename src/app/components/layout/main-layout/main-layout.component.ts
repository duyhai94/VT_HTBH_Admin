import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  
  dataNav = {
   
    list: [
      {
        icon: '',
        name: 'Danh sách nhân viên bán hàng',
      },
      {
        icon: '',
        name: 'Danh sách hợp đồng',
      },
      {
        icon: '',
        name: 'Cấu hình hoa hồng',
      }
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;

  dataNav = {
   
    list: [
      {
        icon: 'assets/img/nav/ic-account.svg',
        name: 'Danh sách nhân viên bán hàng',
        linkURL: '/main/employee'
      },
      {
        icon: 'assets/img/nav/recommendation.svg',

        name: 'Danh sách hợp đồng',
        linkURL: '/main/contract'

      },
      {
        icon: 'assets/img/nav/analystics.svg',

        name: 'Cấu hình hoa hồng',
        linkURL: '/main/setting'

      }
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}

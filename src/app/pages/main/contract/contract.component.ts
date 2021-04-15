import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableModel } from 'src/app/models/base/table.model';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent implements OnInit {
  dataFilterCard = [
    {
      type: {
        Contract: 'contract',
        Seller: 'seller',
        startDate: 'startDate',
        endDate: 'endDate',
        Status: 'status',
        Product: 'product',
        typeDayFilter: 'typeDayFilter',
      },
    },
  ];
  dataTable: TableModel = {
    tableHeader: [
      'ID',
      'Họ tên',
      'Số điện thoại',
      'Ngày sinh',
      'Giới tính',
      'Ngày tham gia',
      'Ngày dừng',
      'Trạng thái',
    ],
    tableData: [
      {
        id: 1,
        name: 'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate: '2020-03-12',
        stopDate: '2020-03-12',
        status: 2,
      },
      {
        id: 2,
        name: 'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate: '2020-03-12',
        stopDate: '2020-03-12',
        status: 4,
      },
      {
        id: 3,
        name: 'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate: '2020-03-12',
        stopDate: '2020-03-12',
        status: 2,
      },
      {
        id: 4,
        name: 'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate: '2020-03-12',
        stopDate: '2020-03-12',
        status: 2,
      },
      {
        id: 5,
        name: 'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate: '2020-03-12',
        stopDate: '2020-03-12',
        status: 2,
      },
    ],
  };

  constructor(private route : Router) {}

  ngOnInit(): void {}

  handleEventRouter = (item) => {
    console.log(item);
    
        this.route.navigateByUrl('/main/contract/detail')
  };
}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TableModel } from 'src/app/models/base/table.model';
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
  dataFilterCard = [
    {type : {
      Id : 'id',
      Phone: 'phone',
      startDate : 'startDate',
      endDate: 'endDate',
      Status: 'status'
    }}
  ]
    
  dataTable: TableModel = {
    tableHeader: ['ID','Họ tên','Số điện thoại','Ngày sinh','Giới tính','Ngày tham gia','Ngày dừng', 'Trạng thái'],
    tableData: [
      {
        id: 1,
        name:'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate:  '2020-03-12',
        stopDate: '2020-03-12',
        status: 2
      },
      {
        id: 2,
        name:'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate:  '2020-03-12',
        stopDate: '2020-03-12',
        status: 4
      },
      {
        id: 3,
        name:'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate:  '2020-03-12',
        stopDate: '2020-03-12',
        status: 2
      },
      {
        id: 4,
        name:'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate:  '2020-03-12',
        stopDate: '2020-03-12',
        status: 2
      },
      {
        id: 5,
        name:'Hải cao duy',
        phone: '0123456789',
        dob: '2020-03-12',
        gender: 'nam',
        joinDate:  '2020-03-12',
        stopDate: '2020-03-12',
        status: 2
      }
    ]
  }
  
  constructor() {}

  ngOnInit(): void {}
}

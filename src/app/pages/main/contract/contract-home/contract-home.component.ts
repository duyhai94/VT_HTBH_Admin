import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TableModel } from 'src/app/models/base/table.model';
import { ListContractService } from 'src/app/services/list-contract.service';

@Component({
  selector: 'app-contract-home',
  templateUrl: './contract-home.component.html',
  styleUrls: ['./contract-home.component.scss']
})
export class ContractHomeComponent implements OnInit {
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
  constructor(private route : Router , private listContract: ListContractService) { }

  ngOnInit(): void {
  }

  handleEventRouter = (item) => {
    console.log(item);
    
        this.route.navigateByUrl('employee/detail')
  };


  getListContract() {
    this.listContract.list({ pageindex: 1, pagesize: 5 }).pipe(map((res: any) => {
      return res.data
    }) 
    )
  }
}

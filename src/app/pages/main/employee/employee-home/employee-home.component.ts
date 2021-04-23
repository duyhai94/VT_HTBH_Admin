import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableModel } from 'src/app/models/base/table.model';
import { EmployeeService } from '../../../../services/employee.service';
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
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss'],
})
export class EmployeeHomeComponent implements OnInit {
  dataFilterCard = [
    {
      type: {
        Id: 'id',
        Phone: 'phone',
        startDate: 'startDate',
        endDate: 'endDate',
        Status: 'status',
      },
    },
  ];

  dataTable: any = {
    tableHeader: [
      {
        text: 'ID',
        key: 'Code',
      },
      {
        text: 'Họ tên',
        key: 'FullName',
      },
      {
        text: 'Số điện thoại',
        key: 'PhoneNumber',
      },
      {
        text: 'Ngày sinh',
        key: 'BirthDay',
      },
      {
        text: 'Giới tính',
        key: 'Gender',
      },
      {
        text: 'Ngày tham gia',
        key: 'CreatedDate',
      },
      {
        text: 'Ngày dừng',
        key: 'CancelDate',
      },

      {
        text: 'Trạng thái',
        key: 'Status',
      }
    ],

  };
  constructor(
    private route: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees(1, 5);
  }
  handleEventRouter = (item) => {
    console.log(item);

    const contractQueryParams = {
      code: item.data.Code,
    };
    this.route.navigate(['/employee/detail'], {
      queryParams: contractQueryParams,
      queryParamsHandling: 'merge',
    });
  };

  getEmployees(pageIndex, pageSize) {
    this.employeeService.getEmployees(pageIndex, pageSize).subscribe((res) => {
      this.dataTable.tableData = res.reverse();
      console.log('employee', res);
    });
  }
}

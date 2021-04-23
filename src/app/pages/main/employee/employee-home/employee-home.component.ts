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
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {
  dataFilterCard = [
    {
      type: {
        Id: 'id',
        Phone: 'phone',
        startDate: 'startDate',
        endDate: 'endDate',
        Status: 'status'
      }
    }
  ]

  dataTable: TableModel = {
    tableHeader: ['ID', 'Họ tên', 'Số điện thoại', 'Ngày sinh', 'Giới tính', 'Ngày tham gia', 'Ngày dừng', 'Trạng thái'],
    tableData: []
  }
  constructor(
    private route: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees(1, 5);
  }
  handleEventRouter = (item) => {
    console.log(item);

    const contractQueryParams = {
      code: item.data.Code,
    }
    this.route.navigate(['/employee/detail'], { queryParams: contractQueryParams, queryParamsHandling: 'merge' });

  };

  getEmployees(pageIndex, pageSize) {
    this.employeeService.getEmployees(pageIndex, pageSize).subscribe(res => {
      this.dataTable.tableData = res.reverse();
      console.log('employee', res);

    })
  }
}

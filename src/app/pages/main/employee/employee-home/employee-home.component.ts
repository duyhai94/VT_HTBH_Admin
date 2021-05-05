import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  EmployeeFilterModel,
  EmployeeModel,
} from 'src/app/models/list/employee.model';
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
  filterModel = {
    Code: '',
    PhoneNumber: '',
    Gender: '',
  };
  filterConfig = [
    {
      type: 'text',
      label: 'id',
      placeholder: 'Nhập ID',
      condition: 'Code',
    },
    {
      type: 'text',
      label: 'Số điện thoại',
      placeholder: 'Nhập số điện thoại',
      condition: 'PhoneNumber',
    },
    // {
    //   type: 'date',
    //   label: 'Khoảng ngày',
    //   placeholder: '',
    //   condition: '',
    // },
    // {
    //   type: 'date',
    //   label: 'Đến',
    //   placeholder: '',
    //   condition: '',
    // },
    {
      type: 'select',
      label: 'Trạng thái',
      placeholder: 'Trạng thái',
      condition: 'Gender',
      data: ['', 'Male', 'Female'],
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
      },
    ],
    tableData: [],
  };
  dataFilter = [];

  totalItems: number;

  constructor(
    private route: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployees(1, 5);
  }
  search(ev) {
    let checkLastFilter = false;
    for (let i = 0; i < this.filterConfig.length; i++) {
      if (ev[this.filterConfig[i].condition] != '') {
        if (checkLastFilter == false) {
          if (this.filterConfig[i].type === 'text') {            
            this.dataTable.tableData = this.dataFilter.filter(
              (a) =>
                a[this.filterConfig[i].condition]
                  .toLowerCase()
                  .indexOf(ev[this.filterConfig[i].condition].toLowerCase()) >
                -1
            );
            checkLastFilter = !checkLastFilter;
          } else {
            this.dataTable.tableData = this.dataFilter.filter((a) => {
              return (
                a[this.filterConfig[i].condition] ==
                ev[this.filterConfig[i].condition]
              );
            });
            checkLastFilter = !checkLastFilter;
          }
        } else {
          if (this.filterConfig[i].type === 'text') {
            this.dataTable.tableData = this.dataTable.tableData.filter(
              (a) =>
                a[this.filterConfig[i].condition]
                  .toLowerCase()
                  .indexOf(ev[this.filterConfig[i].condition].toLowerCase()) >
                -1
            );
          } else {
            this.dataTable.tableData = this.dataTable.tableData.filter((a) => {
              return (
                a[this.filterConfig[i].condition] ==
                ev[this.filterConfig[i].condition]
              );
            });
          }
        }
      } else {
        if(i==this.filterConfig.length-1 && checkLastFilter == false) {
          this.dataTable.tableData = this.dataFilter;
        }
      }
    }
  }
  handleEventRoute(event) {
    const contractQueryParams = {
      code: event.data.Code,
    };
    this.route.navigate(['/employee/detail'], {
      queryParams: contractQueryParams,
      queryParamsHandling: 'merge',
    });
  }

  getEmployees(pageIndex, pageSize) {
    this.employeeService.getEmployees(pageIndex, pageSize).subscribe((res) => {
      this.dataTable.tableData = res.reverse();
      this.dataFilter = res.reverse();
      console.log(res);
    });
  }

  handlePageChange(event) {
    this.getEmployees(event.data, 5);
  }
}

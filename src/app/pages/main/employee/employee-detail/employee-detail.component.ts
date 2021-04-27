import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../services/employee.service';
import { EmployeeModel } from '../../../../models/list/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  data = {
    width: 'auto',
    heigth: '',
    cssClass: 'base-card',
    title: {
      text: '',
      status: '',
    },
    list: [],
  };
  employee: EmployeeModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployeeDetail();
  }

  getEmployeeDetail() {
    let code = this.activatedRoute.snapshot.queryParamMap.get('code');
    this.employeeService.getEmployeeDetail(code).subscribe(res => {
      this.employee = res;
      this.data.title.text = `Chi tiết nhân viên bán hàng - #${this.employee.Code}`
      this.data.list = [
        {
          label: 'Mã nhân viên',
          value: this.employee.Code,
        },
        {
          label: 'Giới tính',
          value: this.employee.Gender,
        },
        {
          label: 'CMT/CCCD',
          value: this.employee.idNumber,
        },
        {
          label: 'Họ và tên',
          value: this.employee.FullName,
        },
        {
          label: 'Ngày tham gia',
          value: this.employee.CreatedDate,
        },
        {
          label: 'Ngày cấp',
          value: this.employee.idIssueDate,
        },
        {
          label: 'Điện thoại',
          value: this.employee.PhoneNumber,
        },
        {
          label: 'Ngày dừng',
          value: '12/12/2020',
        },
        {
          label: 'Nơi cấp',
          value: this.employee.idIssuePlace,
        },
        {
          label: 'Ngày sinh',
          value: this.employee.BirthDay,
        },
        {
          label: 'Trạng thái',
          value: this.employee.Status,
        },
      ]
    })
  }

}

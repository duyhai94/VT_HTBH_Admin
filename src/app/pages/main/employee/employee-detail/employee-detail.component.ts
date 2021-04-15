import { Component, OnInit } from '@angular/core';

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
      text: 'Chi tiết hợp đồng -#DV865926',
      status: '',
    },
    list: [
      {
        label: 'Mã hợp đồng',
        value: 'DV29648265',
      },
      {
        label: 'Hình thức thanh toán',
        value: 'Viễn thông',
      },
      {
        label: 'Ngày tạo',
        value: '10/12/2019-12:00:00',
      },
      {
        label: 'Sản phẩm',
        value: 'Bảo Tâm An',
      },
      {
        label: 'Ngày hiệu lực',
        value: '12/12/2019',
      },
      {
        label: 'Phí bảo hiểm',
        value: '14.000đ',
      },
      {
        label: 'Gói sản phẩm',
        value: 'Cơ bản',
      },
      {
        label: 'Ngày hêt hạn',
        value: '12/12/2020',
      },
      {
        label: 'Hoa hồng kênh',
        value: '1.400đ',
      },
      {
        label: 'Nhà cung cấp',
        value: 'Bảo hiểm Bảo Long',
      },
      {
        label: 'Chu kỳ',
        value: 'Tuần',
      },
      {
        label: 'Hoa hồng NVBH',
        value: '1.000đ',
      },
      {
        label: 'Trang thái',
        value: 'Hoạt động',
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}

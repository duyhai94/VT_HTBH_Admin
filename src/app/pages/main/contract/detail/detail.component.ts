import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dataContract = {
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


  dataSeller = {
    width: 'auto',
    heigth: '',
    cssClass: 'base-card',
    title: {
      text: 'Người bán',
      status: '',
    },
    list: [
      {
        label: 'Mã nhân viên',
        value: '48265',
      },
      {
        label: 'Số điện thoại',
        value: '0987654321',
      },
      {
        label: 'Họ tên',
        value: 'Nguyễn Thị An',
      },
      {
        label: 'Trạng thái',
        value: 'Hoạt động',
      },
    ],
  };

  dataPeople = {
    width: 'auto',
    heigth: '',
    cssClass: 'base-card',
    title: {
      text: 'Người được bảo hiểm',
      status: '',
    },
    list: [
      {
        label: 'Họ và tên',
        value: 'Trần Thị B',
      },
      {
        label: 'Ngày sinh',
        value: '12/12/1990',
      },
      {
        label: 'Giới tính',
        value: 'Nữ',
      },
      {
        label: 'CMT/CCCD',
        value: '98562875676',
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }


}

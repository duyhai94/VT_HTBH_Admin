import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ContractModel } from 'src/app/models/list/contract.model';
import { ContractService } from '../../../../services/contract.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {
  contract: ContractModel;

  dataContract = {
    width: 'auto',
    heigth: '',
    cssClass: 'base-card',
    title: {
      text: '',
      status: '',
    },
    list: [

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
    list: [],
  };

  dataCustomer = {
    width: 'auto',
    heigth: '',
    cssClass: 'base-card',
    title: {
      text: 'Người được bảo hiểm',
      status: '',
    },
    list: [],
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContractDetail();

  }

  getContractDetail() {
    let id = this.activatedRoute.snapshot.queryParamMap.get('id');
    let sellerCode = this.activatedRoute.snapshot.queryParamMap.get('sellerCode');
    this.contractService.getContractDetail(id, sellerCode).subscribe(res => {
      this.contract = res;
      let beneficiary = JSON.parse(this.contract.beneficiary).insureds[0];
      this.dataContract.title.text = `Chi tiết hợp đồng - #${this.contract.code}`
      this.dataContract.list = [
        {
          label: 'Mã hợp đồng',
          value: this.contract.code,
        },
        {
          label: 'Hình thức thanh toán',
          value: this.contract.purchaseMethod,
        },
        {
          label: 'Ngày tạo',
          value: this.contract.created,
        },
        {
          label: 'Sản phẩm',
          value: this.contract.product,
        },
        {
          label: 'Ngày hiệu lực',
          value: this.contract.effectiveDate,
        },
        {
          label: 'Phí bảo hiểm',
          value: this.contract.feeAmount,
        },
        {
          label: 'Gói sản phẩm',
          value: this.contract.productPackDetail.productPack.name,
        },
        {
          label: 'Ngày hết hạn',
          value: this.contract.expiredDate,
        },
        {
          label: 'Hoa hồng kênh',
          value: 'null',
        },
        {
          label: 'Nhà cung cấp',
          value: this.contract.provider,
        },
        {
          label: 'Chu kỳ',
          value: this.contract.productPackDetail.type,
        },
        {
          label: 'Hoa hồng NVBH',
          value: 'null',
        },
        {
          label: 'Trang thái',
          value: this.contract.status,
        },
      ];
      this.dataSeller.list = [
        {
          label: 'Mã nhân viên',
          value: this.contract.seller.Code,
        },
        {
          label: 'Số điện thoại',
          value: this.contract.seller.PhoneNumber,
        },
        {
          label: 'Họ tên',
          value: this.contract.seller.FullName,
        },
        {
          label: 'Trạng thái',
          value: this.contract.seller.Status,
        },
      ];
      this.dataCustomer.list = [
        {
          label: 'Họ và tên',
          value: this.contract.insuredFullName,
        },
        {
          label: 'Ngày sinh',
          value: beneficiary.dob,
        },
        {
          label: 'Giới tính',
          value: beneficiary.gender,
        },
        {
          label: 'CMT/CCCD',
          value: beneficiary.idNumber,
        },
      ]
    })
  }

}

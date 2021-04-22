import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Contract } from '../../../../models/list/list-contract.model';
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
  dataTable: Contract = {
    tableHeader: [
      'Mã hợp đồng',
      'Người bán',
      'Đối tượng BH',
      'Sản phẩm',
      'Ngày tạo',
      'Ngày hiệu lực',
      'Trạng thái',
    ],
    tableData: [],
  };
  pageIndex = 1;
  pageSize = 5;

  constructor(private route: Router, private contractService: ListContractService) { }

  ngOnInit(): void {
    this.getContracts(1, 5);
  }

  handleEventRouter = (item) => {
    console.log(item);
    this.route.navigateByUrl('contract/detail')
  };


  getContracts(pageIndex, pageSize) {
    this.contractService.getContracts(pageIndex, pageSize).subscribe(res => {
      this.dataTable.tableData = res.models.map(contract => {
        return {
          code: contract.code,
          sellerName: contract.sellerName,
          insuredFullName: contract.insuredFullName,
          product: contract.product,
          created: contract.created,
          effectiveDate: contract.effectiveDate,
          status: contract.status,
          id: contract.id,
          sellerCode: contract.sellerCode
        }
      });

    })
  }

  getNextData(currentSize, pageIndex, pageSize) {
    this.contractService.getContracts(pageIndex, pageSize).subscribe(res => {
      let contract = res.models.map(contract => {
        return {
          code: contract.code,
          sellerName: contract.sellerName,
          insuredFullName: contract.insuredFullName,
          product: contract.product,
          created: contract.created,
          effectiveDate: contract.effectiveDate,
          status: contract.status
        }
      });
      this.dataTable.tableData.length = currentSize;
      this.dataTable.tableData.push(...contract);
      this.dataTable.tableData.length = res.total;

    })
  }



}

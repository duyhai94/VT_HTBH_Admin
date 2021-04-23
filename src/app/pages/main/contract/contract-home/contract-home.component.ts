import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Contract } from '../../../../models/list/list-contract.model';
import { ContractService } from 'src/app/services/contract.service';

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
  dataTable: any = {
    tableHeader: [
      {
        text: 'Mã hợp đồng',
        key: 'code',
      },
      {
        text: 'Người bán',
        key: 'sellerName',
      },
      {
        text: 'Đối tượng BH',
        key: 'insuredFullName',
      },
      {
        text: 'Sản phẩm',
        key: 'product',
      },
      {
        text: 'Ngày tạo',
        key: 'created',
      },
      {
        text: 'Ngày hiệu lực',
        key: 'effectiveDate',
      },
      {
        text: 'Trạng thái',
        key: 'status',
      }
    ],
    tableData: [],
  };

  constructor(private route: Router, private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContracts(1, 5);
  }

  handleEventRouter = (item) => {
    console.log(item);
    const contractQueryParams = {
      id: item.data.id,
      sellerCode: item.data.sellerCode
    }
    this.route.navigate(['/contract/detail'], { queryParams: contractQueryParams, queryParamsHandling: 'merge' });
  };


  getContracts(pageIndex, pageSize) {
    this.contractService.getContracts(pageIndex, pageSize).subscribe(res => {
      this.dataTable.tableData = res.models;
    })
  }

  getNextData(currentSize, pageIndex, pageSize) {
    this.contractService.getContracts(pageIndex, pageSize).subscribe(res => {
      let contracts = res.models;
      this.dataTable.tableData.length = currentSize;
      this.dataTable.tableData.push(...contracts);
      this.dataTable.tableData.length = res.total;

    })
  }



}

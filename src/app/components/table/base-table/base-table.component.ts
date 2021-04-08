import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { TableModel } from 'src/app/models/base/table.model';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  
  @Input() data: TableModel;

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule ({
  declarations: [BaseTableComponent],
  imports:[CommonModule],
  exports:[BaseTableComponent]
})

export class BaseTableModule {}

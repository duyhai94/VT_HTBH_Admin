import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModel } from 'src/app/models/base/table.model';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
})
export class BaseTableComponent implements OnInit {
  @Input() tableTitle;
  @Input() data: TableModel;
  @Output() callback = new EventEmitter();

  currentPage = 1;

  constructor() { }

  ngOnInit(): void { }
  handleEventRoute = (item) => {
    this.callback.emit({
      type: 'route',
      data: item,
    });
  };

  onDeleteItem = (item) => {
    this.callback.emit({
      type: 'delete',
      data: item,
    });
  };

  pageChanged(e) {
    this.currentPage = e
  }

}

@NgModule({
  declarations: [BaseTableComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [BaseTableComponent],
})
export class BaseTableModule { }

import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
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
}

@NgModule({
  declarations: [BaseTableComponent],
  imports: [CommonModule],
  exports: [BaseTableComponent],
})
export class BaseTableModule {}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss']
})
export class FilterCardComponent implements OnInit {
@Input() listFilter;
@Input() filterConfig;
@Input() filterModel;
@Output() callBack = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    console.log(this.filterModel, 1);
  }
  onSearchClick() {
    console.log(this.filterModel);
    this.callBack.emit(this.filterModel);
  }
}

@NgModule ({
  declarations: [FilterCardComponent],
  imports: [CommonModule,
              FormsModule,ReactiveFormsModule
  ],
  exports: [FilterCardComponent]

})

export class FilterCardModule{}
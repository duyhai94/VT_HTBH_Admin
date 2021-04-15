import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { employeeRouter } from './employee.routes';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { FilterCardModule } from 'src/app/components/card/filter-card/filter-card.component';
import { BaseTableModule } from 'src/app/components/table/base-table/base-table.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeHomeComponent,
    EmployeeDetailComponent,
  ],
  imports: [CommonModule, 
            RouterModule.forChild(employeeRouter),
            BaseCardModule,
            FilterCardModule,
            BaseTableModule
          ],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}

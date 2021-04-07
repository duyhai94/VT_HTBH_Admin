import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { FilterCardModule } from 'src/app/components/card/filter-card/filter-card.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ContractComponent } from './contract/contract.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from './contract/detail/detail.component';

@NgModule({
  declarations: [
    MainComponent,
    EmployeeComponent,
    ContractComponent,
    SettingComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    LayoutModule,
    BaseCardModule,
    FilterCardModule

  ],
  providers: [],
})
export class MainModule {}

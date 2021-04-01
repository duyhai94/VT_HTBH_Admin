import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponentModule } from 'src/app/components/card/card-component.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { ContractComponent } from './contract/contract.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    MainComponent,
    EmployeeComponent,
    ContractComponent,
    SettingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    LayoutModule,
    CardComponentModule,
  ],
  providers: [],
})
export class MainModule {}

import { Routes } from '@angular/router';
import { AppGuard } from 'src/app/utils/guards/app.guard';
import { ContractComponent } from './contract/contract.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main.component';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from "./contract/detail/detail.component";
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'contract',
        component: ContractComponent, data: { animation: 'isRight' } 
      },
      {
        path: 'setting',
        component: SettingComponent,data: { animation: 'isRight' } 
      },
      {
        path: 'contract/detail',
        component: DetailComponent,data: { animation: 'isRight' } 
      },
      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full',
      },
    ],
  },
];

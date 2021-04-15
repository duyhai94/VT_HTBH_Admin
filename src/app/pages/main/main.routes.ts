import { Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { DetailComponent } from './contract/detail/detail.component';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
        data: { animation: 'isRight' },
      },
      {
        path: 'contract',
        component: ContractComponent,
        data: { animation: 'isRight' },
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then((m) => m.SettingModule),
        data: { animation: 'isRight' },
      },
      // {
      //   path: 'contract/detail',
      //   component: DetailComponent,
      //   data: { animation: 'isRight' },
      // },

      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full',
      },
    ],
  },
];

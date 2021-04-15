import { Routes } from '@angular/router';
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
      },
      {
        path: 'contract',
        loadChildren: () => import('./contract/contract.module').then ( m => m.ContractModule),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then((m) => m.SettingModule),
      },
     

      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full',
      },
    ],
  },
];

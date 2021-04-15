import { Routes } from '@angular/router';
import { SettingHomeComponent } from './setting-home/setting-home.component';
import { SettingComponent } from './setting.component';

export const settingRouter: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: '',
        component: SettingHomeComponent,
        data: { animation: 'isRight' },

      },
    ]
            
  }
];

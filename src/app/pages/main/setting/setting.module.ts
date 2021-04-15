import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BoxCardModule } from 'src/app/components/card/box-card/box-card.component';
import { SettingHomeComponent } from './setting-home/setting-home.component';
import { SettingComponent } from './setting.component';
import { settingRouter } from './setting.routes';

@NgModule({
  declarations: [SettingComponent,SettingHomeComponent],
  imports: [CommonModule,
    RouterModule.forChild(settingRouter),
    BoxCardModule,
    MatTabsModule,
  ],
  exports: [SettingComponent],
})
export class SettingModule {}

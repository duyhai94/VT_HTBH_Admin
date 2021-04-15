import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { BoxCardModule } from 'src/app/components/card/box-card/box-card.component';
import { FilterCardModule } from 'src/app/components/card/filter-card/filter-card.component';
import { BaseTableModule } from 'src/app/components/table/base-table/base-table.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ContractComponent } from './contract/contract.component';
import { DetailComponent } from './contract/detail/detail.component';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    MainComponent,
    ContractComponent,
    SettingComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    LayoutModule,
    BaseCardModule,
    FilterCardModule,
    BaseTableModule,
    MatTabsModule,
    BoxCardModule,
  ],
  providers: [],
})
export class MainModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { FilterCardModule } from 'src/app/components/card/filter-card/filter-card.component';
import { BaseTableModule } from 'src/app/components/table/base-table/base-table.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractHomeComponent } from './contract-home/contract-home.component';
import { ContractComponent } from './contract.component';
import { contractRoute } from './contract.routes';

@NgModule({
  declarations: [
    ContractComponent,
    ContractHomeComponent,
    ContractDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contractRoute),
    FilterCardModule,
    BaseTableModule,
    BaseCardModule,
  ],
  exports: [ContractComponent],
})
export class ContractModule {}

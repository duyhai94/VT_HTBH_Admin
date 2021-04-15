import { Routes } from "@angular/router";
import { ContractDetailComponent } from "./contract-detail/contract-detail.component";
import { ContractHomeComponent } from "./contract-home/contract-home.component";
import { ContractComponent } from "./contract.component";

export const contractRoute: Routes = [
  {
    path: '',
    component: ContractComponent,
    children: [
      {
        path: '',
        component: ContractHomeComponent,
        data: { animation: 'isRight' },

      },
      {
        path: 'detail',
        component: ContractDetailComponent,
        data: { animation: 'isRight' },

      }, 
    ]
  }
]
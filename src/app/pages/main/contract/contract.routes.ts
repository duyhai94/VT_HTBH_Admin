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
        path: 'home',
        component: ContractHomeComponent
      },
      {
        path: 'detail',
        component: ContractDetailComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }     
    ]
  }
]
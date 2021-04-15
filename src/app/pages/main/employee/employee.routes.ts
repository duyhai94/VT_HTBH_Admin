import { Routes } from "@angular/router";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeHomeComponent } from "./employee-home/employee-home.component";
import { EmployeeComponent } from "./employee.component";

export const employeeRouter : Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: { animation: 'isLeft' },
    children: [
      {
        path: '',
        component: EmployeeHomeComponent,
      },
      {
        path: 'detail',
        component: EmployeeDetailComponent,
      },
    ]
  }
]
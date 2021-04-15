import { Routes } from "@angular/router";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeHomeComponent } from "./employee-home/employee-home.component";
import { EmployeeComponent } from "./employee.component";

export const employeeRouter : Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: EmployeeHomeComponent,
        data: { animation: 'isRight' },
      },
      {
        path: 'detail',
        component: EmployeeDetailComponent,
        data: { animation: 'isLeft' },
      },
    ]
  }
]
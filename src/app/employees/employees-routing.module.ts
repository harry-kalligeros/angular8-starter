import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesLayoutComponent } from './employees-layout/employees-layout.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
	{ path: ':id', component: EmployeeComponent },
	{ path: '', component: EmployeesLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

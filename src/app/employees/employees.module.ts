import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesLayoutComponent } from './employees-layout/employees-layout.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { FilterEmployeePipe } from './filter-employee.pipe';

@NgModule({
	declarations: [
		EmployeeListComponent,
		EmployeeComponent,
		EmployeeFilterComponent,
		EmployeesLayoutComponent,
		FilterEmployeePipe
	],
	imports: [CommonModule, EmployeesRoutingModule, FormsModule]
})
export class EmployeesModule {}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Component({
	selector: 'mw-employees-layout',
	templateUrl: './employees-layout.component.html',
	styleUrls: ['./employees-layout.component.scss']
})
export class EmployeesLayoutComponent implements OnInit {
	employees$: Observable<Employee[]>;
	employeeFilter: string;
	employees: Employee[];

	constructor(private employeeService: EmployeeService) {}

	ngOnInit() {
		this.employees$ = this.employeeService.fetchEmployees();
	}

	onFilterEmployee(filter: string) {
		this.employeeFilter = filter;
	}
}

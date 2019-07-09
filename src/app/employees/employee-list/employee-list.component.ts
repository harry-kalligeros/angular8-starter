import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
	selector: 'mw-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

	@Input() employees: Employee[];
	@Input() employeeFilter: string;

	constructor() {}

	ngOnInit() {}

	trackByEmployee(index: number, item: Employee) {
		return item.id;
	}
}

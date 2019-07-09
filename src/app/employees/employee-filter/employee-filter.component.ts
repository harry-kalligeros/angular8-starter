import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
	selector: 'mw-employee-filter',
	templateUrl: './employee-filter.component.html',
	styleUrls: ['./employee-filter.component.scss']
})
export class EmployeeFilterComponent implements OnInit {
	@Output() filterEmployee = new EventEmitter<string>();

	set employeeFilter(filter: string) {
		this.filterEmployee.emit(filter);
	}

	constructor() {}

	ngOnInit() {
		this.clear();
	}

	clear() {
		this.employeeFilter = '';
	}
}

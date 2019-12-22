import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
	selector: 'mw-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	employeeId: number;
	employee$: Observable<Employee>;

	constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

	ngOnInit() {
		this.subscription = this.route.params.subscribe(params => {
			this.employeeId = Number(params.id);
			this.employee$ = this.employeeService.fetchEmployee(this.employeeId);
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

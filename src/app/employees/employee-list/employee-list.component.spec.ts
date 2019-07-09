import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { FilterEmployeePipe } from '../filter-employee.pipe';
import { EmployeeListComponent } from './employee-list.component';
import { APP_BASE_HREF } from '@angular/common';

describe('EmployeeListComponent', () => {
	let component: EmployeeListComponent;
	let fixture: ComponentFixture<EmployeeListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterModule.forRoot([])],
			declarations: [EmployeeListComponent, FilterEmployeePipe],
			providers: [{
				provide: APP_BASE_HREF,
				useValue: '/'
			}]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeeListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

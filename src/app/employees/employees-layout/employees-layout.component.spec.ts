import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLayoutComponent } from './employees-layout.component';


describe('EmployeesLayoutComponent', () => {
	let component: EmployeesLayoutComponent;
	let fixture: ComponentFixture<EmployeesLayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [EmployeesLayoutComponent],
			schemas: [NO_ERRORS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeesLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

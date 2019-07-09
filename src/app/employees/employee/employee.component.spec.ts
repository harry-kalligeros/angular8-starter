import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';


describe('EmployeeComponent', () => {
	let component: EmployeeComponent;
	let fixture: ComponentFixture<EmployeeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterModule.forRoot([]), HttpClientTestingModule],
			declarations: [EmployeeComponent],
			providers: [{
				provide: APP_BASE_HREF,
				useValue: '/'
			}]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

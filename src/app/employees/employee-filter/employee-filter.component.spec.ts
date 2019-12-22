import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilterComponent } from './employee-filter.component';
import { FormsModule } from '@angular/forms';

describe('EmployeeFilterComponent', () => {
	let component: EmployeeFilterComponent;
	let fixture: ComponentFixture<EmployeeFilterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [EmployeeFilterComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeeFilterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

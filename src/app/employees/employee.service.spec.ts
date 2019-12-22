import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		})
	);

	it('should be created', () => {
		const service: EmployeeService = TestBed.get(EmployeeService);
		expect(service).toBeTruthy();
	});
});

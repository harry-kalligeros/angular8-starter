import { TestBed } from '@angular/core/testing';

import { GraphsService } from './graphs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GraphsService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		})
	);

	it('should be created', () => {
		const service: GraphsService = TestBed.get(GraphsService);
		expect(service).toBeTruthy();
	});
});

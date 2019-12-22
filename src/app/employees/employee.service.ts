import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from './employee';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	constructor(private http: HttpClient) {}

	fetchEmployees(): Observable<Employee[]> {
		return this.http.get<Employee[]>('api/users');
	}

	fetchEmployee(id: number): Observable<Employee> {
		if (!Number.isInteger(id)) { return of(null); }
		return this.http.get<Employee>(`api/user/${id}`);
	}
}

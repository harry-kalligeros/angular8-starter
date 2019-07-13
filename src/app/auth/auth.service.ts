import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from './auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) {}

	login(credentials: Credentials): Observable<string> {
		return this.http.post<string>('api/users/authenticate', credentials);
	}
}

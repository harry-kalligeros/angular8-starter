import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from './auth.interfaces';
import { Observable } from 'rxjs';

/**
 * Desc
 *
 * @export
 * @class AuthService
 */
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isLoggedIn = false;

	constructor(private http: HttpClient) {}

	/**
	 *  description
	 *
	 * @param {Credentials} credentials
	 * @returns {Observable<string>}
	 * @memberof AuthService
	 */
	login(credentials: Credentials): Observable<string> {
		return this.http.post<string>('api/users/authenticate', credentials);
	}
}

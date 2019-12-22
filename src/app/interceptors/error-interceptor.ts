import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private router: Router, private authService: AuthService) {}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			map(response => {
				console.log('ok', response);
				if (response instanceof HttpResponse && response.status >= 200 && response.status < 300) {
					const txt = response.body.someText;

					// do something with txt
				}
				return response;
			}),
			catchError(response => {
				if (response instanceof HttpErrorResponse) {
					console.log('error', response);
					switch ((response as HttpErrorResponse).status) {
						case 400:
							// handle error 400
							break;
						case 401:
								// handle error 401
								this.router.navigate(['/login']);
								this.authService.isLoggedIn = false;
								break;
						case 452:
							// handle error 452
							break;
						default:
							// handle other errors
							break;
					}
				}
				return throwError(response);
			})
		);
	}
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NoCacheInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headers = req.headers
			.set('pragma', 'no-cache')
			.set('cache-control', 'no-cache')
			;
		const noCacheReq = req.clone({ headers });
		return next.handle(noCacheReq);
	}
}

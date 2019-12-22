import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../auth/storage.service';

@Injectable({providedIn: 'root'})
export class NoCacheInterceptor implements HttpInterceptor {
	constructor(private storageService: StorageService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const headers = req.headers
			.set('pragma', 'no-cache')
			.set('cache-control', 'no-cache')
			.set('Authorisation', 'Bearer ' + this.storageService.get('token'))
			;
		const noCacheReq = req.clone({ headers });
		return next.handle(noCacheReq);
	}
}

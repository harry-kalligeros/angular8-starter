import {ErrorInterceptor} from './error-interceptor';
import {NoCacheInterceptor} from './no-cache.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const interceptorProviders = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: ErrorInterceptor,
		multi: true
	},
	{
		provide: HTTP_INTERCEPTORS,
		useClass: NoCacheInterceptor,
		multi: true
	}
];

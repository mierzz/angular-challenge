import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = 'Vd6phDRvh6BDNbDGpzOLI1FxHorF12jK';

		const interceptedRequest = request.clone({
			headers: request.headers.set('fr-access-token', token),
		});

		return next.handle(interceptedRequest);
	}
}

import { Injectable, Provider } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    protected readonly auth: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.authenticated) {
      req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.auth.token}`)
      });
    }
    return next.handle(req);
  }

}

export const AUTH_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true,
  deps: [ AuthService ]
};

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  static accessToken ='';

  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const authService = this.injector.get(AuthService);
    const tokenReq = req.clone({
      setHeaders:
      {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
      return next.handle(tokenReq);
  }
}

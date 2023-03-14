import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService{

  
  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    var tokenReq = req.clone();
    const authService = this.injector.get(AuthService);
    
    if(authService.isLoggedIn()==true){
     tokenReq = req.clone({
      setHeaders:
      {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
       }
       return next.handle(tokenReq);
 

}

}
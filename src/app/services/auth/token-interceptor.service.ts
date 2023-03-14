import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService{


//   constructor(private injector:Injector) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler){
//     const authService = this.injector.get(AuthService);
//     if(`${authService.isLoggedIn()}`){
//     const tokenReq = req.clone({
//       setHeaders:
//       {
//         Authorization: `Bearer ${authService.getToken()}` clasdsads/auth?Authorization= Bearer saxax.asdasd.asdasd
//       }
//     })
//       return next.handle(tokenReq);
//   }
//   return next.handle(req.clone());
// }
// }
}

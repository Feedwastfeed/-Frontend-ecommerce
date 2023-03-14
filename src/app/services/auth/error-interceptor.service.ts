import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService{

  // constructor(
  //   private authService: AuthService,
  //   private router: Router
  // ) { }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //  return next.handle(req).pipe(
  //   catchError((error:HttpErrorResponse)=>{
  //     if ([401,403].indexOf(error.status)!== -1) {
  //       this.authService.userLogout();
  //     } else if (error.status === 404) {
  //       this.router.navigate(['/notFoundResource', error.status],{
  //         queryParams:{
  //           "Error-Status":error.status
  //         }
  //       })
  //     }{
        
  //     }
  //   })
  //  )   
  // }
}
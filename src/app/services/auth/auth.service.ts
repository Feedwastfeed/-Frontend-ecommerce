import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorHandler } from 'src/app/shared/error-handler';
import { Observable } from 'rxjs';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';
import { Customer } from 'src/app/models/customer';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }
  private errorHandler:ErrorHandler=new ErrorHandler();

 private _registerUrl= `http://localhost:9090/ecommerce/auth/register`;
 private _loginUrl= `http://localhost:9090/ecommerce/auth/login`;
 private _adminRegisterUrl=`http://localhost:9090/ecommerce/auth/admin/register`;
 private _userUrl = 'http://localhost:9090/ecommerce/customer/'
 private _usersURL='http://localhost:9090/ecommerce/customer/all';
  
 

    register(data:any): Observable<any>{
    return this.http.post<any>(this._registerUrl,data);
    }
     login(data:any): Observable<any>{
        return this.http.post<any>(this._loginUrl,data) 
     }
     adminRegister(data:any): Observable<any>{

        console.log(data);
        return this.http.post<any>(this._adminRegisterUrl,data);
     
     }

     userLogout(){
      localStorage.removeItem('username')
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("ID");
      this.router.navigate(['/home']);
     };
   //   isUser():boolean{
   //    if(this.isCustomer()&&this.isAdmin()) return true;
   //    return false;
   //   }
     isCustomer():boolean{
      if (localStorage.getItem('role')=='CUSTOMER') {
         return true;
      }
      return false;
   }
     getUsername(){
      return localStorage.getItem('username');
     }
     isAdmin():boolean{
      if (localStorage.getItem('role')=='ADMIN') {
         return true;
      }
      return false;
     }
     getCurrentUserId(){
      return localStorage.getItem('ID');
     }
     getCurrentUser(id:number){
        return this.http.get<any>(this._userUrl+id);      
     }
     getToken(){
      console.log("User Token"+localStorage.getItem("token"))
      return localStorage.getItem("token");
     }
     isLoggedIn(): boolean{
      return !!localStorage.getItem("token");
     }
     getSystemCustomers(): Observable<Customer[]>{
        return this.http.get<any>(this._usersURL);
     }
  }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {AuthService} from'src/app/services/auth/auth.service';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  id:String;
  constructor(private authService:AuthService,private _http: HttpClient) {
    
    this.id=authService.getCurrentUserId(); 
  }

  getCustomerById(): Observable<ResponseViewModel>
  {
    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/customer/' + 39);
  }

}

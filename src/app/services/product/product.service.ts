import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http:HttpClient) { }

  getAllProducts():Observable<ResponseViewModel> {
    
     return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/products');

  }
}

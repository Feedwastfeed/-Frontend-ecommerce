import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http: HttpClient) { }


  checkStock(productOrder: any): Observable<ResponseViewModel>{
    return this._http.post<ResponseViewModel>('http://localhost:9090/ecommerce/products/stock', productOrder);
  }
  updateStock(productOrder: any): Observable<ResponseViewModel>{
    return this._http.put<ResponseViewModel>('http://localhost:9090/ecommerce/products/stock', productOrder);
  }

  getProductById(id: number): Observable<ResponseViewModel> {

    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/products/' + id);
  }

  getAllProducts(): Observable<ResponseViewModel> {

    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/products');
  }
  getAllProductsByTime(): Observable<ResponseViewModel> {

    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/products/time');
  }
  add(product: Product): void {

   this._http.post('http://localhost:9090/ecommerce/products', product).subscribe(res=>{

   });
  }

  update(product: Product): Observable<ResponseViewModel> {

    return this._http.put<ResponseViewModel>('http://localhost:9090/ecommerce/products', product);
  }

  delete(id: number): Observable<ResponseViewModel> {

    return this._http.delete<ResponseViewModel>('http://localhost:9090/ecommerce/products/' + id);
  }
  uploadImage(formdata : FormData):void {

    this._http.post('http://localhost:9090/ecommerce/products/upload',formdata).subscribe(res=>
    {
     
    })
  }

}

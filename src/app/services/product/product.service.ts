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


  constructor(private _http:HttpClient , private router: Router) { }

  getAllProducts():Observable<ResponseViewModel> {
    
     return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/products');

  }

  getProductById(id:number):Observable<ResponseViewModel> {
    console.log(id);
    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/products/'+id);

 }

 viewProductDetails(product: Product) {
  this.router.navigate(['/products', product.id], {
  })
}

}

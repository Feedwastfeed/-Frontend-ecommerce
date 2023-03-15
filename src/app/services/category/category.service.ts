import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }


  getAllCategories(): Observable<ResponseViewModel> {

    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/category');

  }
  getCategoryByID(id:number): Observable<ResponseViewModel> {

    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/category/'+id);

  }
  addCategory(category:Category):void{

    this._http.post('http://localhost:9090/ecommerce/category', category).subscribe(res=>{

  });
  }

}

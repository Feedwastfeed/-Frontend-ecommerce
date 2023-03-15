import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';
import { Orders } from 'src/app/models/orders';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http:HttpClient) { }

  getAllOrders():Observable<ResponseViewModel>{
    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/order/orders')
  }

  addAddress(address: Address):Observable<ResponseViewModel>{
    return this._http.post<ResponseViewModel>('http://localhost:9090/ecommerce/order/address', address);
  }


  updateOrder(order: Orders):Observable<ResponseViewModel>{
    return this._http.post<ResponseViewModel>('http://localhost:9090/ecommerce/order/address', order);
  }

  getAddressForCustomer(id: number):Observable<ResponseViewModel>{
    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/order/address/' + id);
  }
}

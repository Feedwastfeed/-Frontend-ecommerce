import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { OrderHasProduct } from 'src/app/models/orderhasproduct';
import { OrderHasProductId } from 'src/app/models/orderhasproductid';
import { Orders } from 'src/app/models/orders';
import { Product } from 'src/app/models/product';
import { ResponseViewModel } from 'src/app/models/responseviewmodel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private orders = new Orders();
  private count = 0;
  public scoreSubject = new Subject<number>();


  constructor(private _http: HttpClient) {
    // check user logged in here
    if (1 > 0) {
      // 26 is customer id where take it from token
      this.getcart(2).subscribe(
        response => {
          if (response.data != null) {
            this.orders = response.data;
            this.count = this.orders.orderHasProductsDTO.length;
            console.log(response);
          }
        });
    }
  }

  countProductCart(): number {
    this.scoreSubject.next(this.count);
    return this.count;
  }

  addProductToCart(product: Product) {
    if (this.orders.id == null) {
      // if there is no cart or this first order
      this.addOrder().subscribe(
        response => {
          this.orders = response.data;
          let id = response.data.id
          this.addProductToCustomerOrder(product, id);
        });
      this.count++;
    } else {
      // check this product not add to cart
      this.chickProductAddedToCart(product, this.orders.id).subscribe(
        response => {
          // if this product not add to cart
          console.log(response.data + " " + product.id + " " + this.orders.id);
          if (response.data == 0) {
            this.addProductToCustomerOrder(product, this.orders.id);
            console.log(this.count + " 5412");
            this.count++;
          }
        });
    }
  }


  chickProductAddedToCart(product: Product, orderId: number): Observable<ResponseViewModel> {
    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/productOrder/' + product.id + '/' + orderId);
  }

  addProductToCustomerOrder(product: Product, id: number) {
    // add first order in cart
    let orderHasProudect = new OrderHasProduct(new OrderHasProductId(id, product.id), 1);
    this._http.post<ResponseViewModel>('http://localhost:9090/ecommerce/productOrder', orderHasProudect).subscribe();
  }

  addOrder(): Observable<ResponseViewModel> {
    // take customer from toaken
    let customer = new Customer();
    customer.id = 2;
    let order = new Orders(customer, 0, false, new Date());
    return this._http.post<ResponseViewModel>('http://localhost:9090/ecommerce/order', order);
  }

  getcart(id: number): Observable<ResponseViewModel> {
    return this._http.get<ResponseViewModel>('http://localhost:9090/ecommerce/cart/' + id);
  }



}

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
    if (1 > 0) { // check user logged in here
      this.getcart(26).subscribe(  // 26 is customer id where take it from token
        response => {
          if (response.data != null) {
            this.orders = response.data;
            this.count = this.orders.orderHasProductsDTO.length;
            console.log(response);
          }
        });
    }
  }

  getOrders(): Orders {
    return this.orders;
  }
  countProductCart(): number {
    this.scoreSubject.next(this.count);
    return this.count;
  }

  addProductToCart(product: Product) {
    if (1 > 0) { // check user logged in here
      if (this.orders.id == null) {  // if there is no cart or this first order
        this.addFirstProductToCart(product);
      } else {   // check this product not add to cart
        this.chexckBeforeAddToCart(product);
      }
    } else {

    }
  }

  chexckBeforeAddToCart(product: Product) {
    this.chickProductAddedToCart(product, this.orders.id).subscribe(
      response => {
        // if this product not add to cart
        if (response.data == 0) {
          this.addProductToCustomerOrder(product, this.orders.id);
          this.addproductToOrderList(product);
          this.count++;
        }
      });
  }

  addFirstProductToCart(product: Product) {
    this.addOrder().subscribe(
      response => {
        this.orders = response.data;
        let id = response.data.id
        this.addProductToCustomerOrder(product, id);
        this.addproductToOrderList(product);
        this.count++;
      });
  }

  addproductToOrderList(product: Product) {
    let orderHasProduct = new OrderHasProduct();
    orderHasProduct.product = product;
    orderHasProduct.amount = 1;
    this.orders.orderHasProductsDTO.push(orderHasProduct);
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

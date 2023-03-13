import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResponseViewModel } from './models/responseviewmodel';
import { CartService } from './services/cart/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private cartServices: CartService){}
 

 countCart():number{
  console.log(this.cartServices.countProductCart());
  return this.cartServices.countProductCart();
 }

}

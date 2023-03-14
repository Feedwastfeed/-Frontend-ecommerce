import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseViewModel } from './models/responseviewmodel';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cart = 'bi bi-cart-check';
  title = 'ecommerce';

  constructor(private cartServices: CartService,public authService:AuthService,private router:Router){}
 

 countCart():number{
  // console.log(this.cartServices.countProductCart());
  if (this.cartServices.countProductCart()>0) {
    this.cart='bi bi-cart-check-fill';
  }
  return this.cartServices.countProductCart();
 }

 logout(){
  console.log(this.authService.isLoggedIn(),this.authService.isCustomer(),this.authService.isAdmin(),this.authService.getCurrentUserId());
  this.authService.userLogout();
  console.log(this.authService.isLoggedIn());
  
  this.router.navigate(['/login'])
 }

}

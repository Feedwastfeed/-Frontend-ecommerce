import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponseViewModel } from './models/responseviewmodel';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'ecommerce';

  constructor(private cartServices: CartService,public authService:AuthService,private router:Router){
    this.walletValue();
  }
  ngOnInit(): void {
    this.authService.saveData();
    this.cartServices.getCartValue();
    this.cartServices.countProductCart();
    this.countCart();
  }
 
 
  cartLogo(){
    if (this.cartServices.countProductCart()>0) {
      return true;
    }else{
      return false
    }

  }

 countCart(){
  // console.log(this.cartServices.countProductCart());
  
  return this.cartServices.countProductCart();
 }

 logout(){
  this.authService.userLogout();
  
  this.router.navigate(['/login'])
 }
 walletValue(){
  return "$"+this.authService.getCustomerData().walletLimit;
 }

 orderpath(){
  return "customerorders/"+this.authService.getCustomerData().id;
 }



 
}
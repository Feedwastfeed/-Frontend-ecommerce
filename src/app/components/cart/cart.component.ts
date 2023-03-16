import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cartService: CartService, private router: Router, private productService: ProductService,private authService:AuthService) { }


  orderInformation(){
    this.productService.checkStock(this.cartService.orders.orderHasProductsDTO).subscribe(
      response =>{
        let checkStock = response.data;
        if(checkStock.length == 0){
          this.router.navigate(['/cartDetails']);
        }else{
         this.authService.openDialog('The current stock of the '+ this.cartService.findNameProductById(checkStock[0]) +' is insufficient \nTry a smaller amount')          
        }
      });
  }

  

  deleteProduct(index: number) {
    this.cartService.deleteProductFromCart( this.cartService.orders.orderHasProductsDTO[index].product);
  }

  totalPrice(index: number): number {
    return  this.cartService.orders.orderHasProductsDTO[index].product.price *  this.cartService.orders.orderHasProductsDTO[index].amount;
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  allTotalPrice(): number {
    this.cartService.orders.totalPrice = 0;
    this.cartService.orders.orderHasProductsDTO.forEach(product => {
      this.cartService.orders.totalPrice += product.product.price * product.amount;
    });
    return this.cartService.orders.totalPrice;
  }
  valid() : boolean{
    return !(this.cartService.orders.orderHasProductsDTO.length > 0);
  }
}

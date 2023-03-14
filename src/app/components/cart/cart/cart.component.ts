import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Orders } from 'src/app/models/orders';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders = new Orders();

  constructor(private cartService: CartService, private router: Router,private injector:Injector){}

  ngOnInit(): void {
    this.orders = this.cartService.getOrders();
    console.log(this.orders);
  }
  deleteProduct(index: number){
    this.orders.orderHasProductsDTO.splice(index, 1);
    
  }

  totalPrice(index: number): number{
    return this.orders.orderHasProductsDTO[index].product.price * this.orders.orderHasProductsDTO[index].amount;
  }
  viewProductDetails(product:Product):void{
  
    this.router.navigate(['/products', product.id])
  }
}

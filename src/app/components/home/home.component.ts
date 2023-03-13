import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/models/orders';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

  products:Product[]=[];
  
  constructor(private productservice : ProductService, private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(
      response=>{ 
         this.products=response.data;
      });
  }

  viewProductDetails(product:Product):void{
  
    this.router.navigate(['/products', product.id], {
    })
  }
    
  addProductToCart(product: Product): void{
    this.cartService.addProductToCart(product);
  }

}

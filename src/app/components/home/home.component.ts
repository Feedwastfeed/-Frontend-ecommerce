import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

  constructor(private productservice : ProductService ) { 
  }
  products:Product[]=[];
  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(
      response=>{ 
         this.products=response.data;

      });
  }
  viewProductDetails(product:Product):void{
  
       this.productservice.viewProductDetails(product);
  }
    
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products:Product[] = [];
  constructor(private productservice: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(
      response=>{ 
         this.products=response.data;
      });
  }

  viewProductDetails(product:Product):void{
  
    this.router.navigate(['/products', product.id])
  }

  updateProduct(product: Product):void{
    this.productservice.update(product).subscribe(
      response => {
          alert(response.message);
      });
  }

  deleteProduct(product: Product):void{
    this.productservice.delete(product.id).subscribe(
      response => {
          alert(response.message);
      });
  }
}

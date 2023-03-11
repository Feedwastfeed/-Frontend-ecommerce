import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {


  product: Product;
  constructor(private route: ActivatedRoute, private productservice: ProductService) {

    route.paramMap.subscribe((params: ParamMap) => {

      if (params.get('productid')) {

        this.productservice.getProductById(+params.get('productid'))
          .subscribe(response => {
            this.product = response.data;

          })
      }
    })


  }



}

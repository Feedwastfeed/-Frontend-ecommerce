import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Patterns } from 'src/app/shared/patterns/patterns';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

constructor(private http:HttpClient , private formbuilder:FormBuilder , private productservice:ProductService){}

productform:FormGroup;

ngOnInit(): void {

  this.productform=this.formbuilder.group({

    productname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40)]],
    productdesc:['',[Validators.required,Validators.minLength(5),Validators.maxLength(250)]],
    productprice:[1,[Validators.required,Validators.min(1)]],
    productrate:[1,[Validators.required,Validators.max(5),Validators.min(1)]],
    productstock:[1,[Validators.required,Validators.min(1),Validators.max(100000),Validators.pattern("^[0-9]*$")]],
    productcategory:['',[Validators.required]],
    productimage:['',[Validators.required]]
  });
      
}

event:any;
setEvent(event:any):void{
this.event=event;

}

addImage():void{

  console.log(event);
  if(this.event.target.files.length>0){
    const file =this.event.target.files[0];
    const formdata = new FormData();
    formdata.append('file',file);

    this.http.post('http://localhost:9090/ecommerce/products/upload',formdata).subscribe((res:any)=>{
          

    })
  }
}
  }

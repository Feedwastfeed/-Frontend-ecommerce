import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

constructor(private http:HttpClient , private formbuilder:FormBuilder){}

productform:FormGroup;

ngOnInit(): void {

  this.productform=this.formbuilder.group({

    productname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40)]],
    productdesc:['',[Validators.required,Validators.minLength(5),Validators.maxLength(250)]],
    productprice:[1,[Validators.required,Validators.min(1)]],
    productstock:[1,[Validators.required,Validators.min(1),Validators.max(100000)]],
    productrate:[1,[Validators.required,Validators.max(5),Validators.min(1)]],
    productcategory:['',[Validators.required]],
    productimage:['',[Validators.required]]
  });
      
}



















addImage(event:any):void{

  if(event.target.files.length>0){

    const file =event.target.files[0];
    const formdata = new FormData();
    formdata.append('file',file);
    this.http.post('http://localhost:9090/ecommerce/products/upload',formdata).subscribe((res:any)=>{
           console.log("tmaaam");

    })
  }
}


}

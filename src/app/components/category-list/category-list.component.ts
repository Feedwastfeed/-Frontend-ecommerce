import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

categories:Category[];
constructor(private router:Router , private categoryservice:CategoryService){

}

ngOnInit(): void {
  this.categoryservice.getAllCategories().subscribe(
    response=>{ 
       this.categories=response.data;
    });
}

viewCategoryDetails(category:Category):void{

  this.router.navigate(['/category', category.id], {
  })
}


}

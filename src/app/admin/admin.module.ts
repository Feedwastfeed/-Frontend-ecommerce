import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [ManageUsersComponent, ManageProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,
    AppRoutingModule 
  ]
})
export class AdminModule { }

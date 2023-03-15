import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AdminRegisterComponent } from '../components/admin-register/admin-register.component';




@NgModule({
  declarations: [ManageOrdersComponent,ManageUsersComponent, ManageProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,
    AppRoutingModule 
  ]
})
export class AdminModule { }

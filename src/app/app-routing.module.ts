import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './admin/components/manage-products/manage-products.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CustomerOrderComponent } from './components/customer-order/customer-order/customer-order.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';

const routes: Routes = [
  { 
    path: 'cartDetails',
    component: CartDetailsComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path: 'contact' , 
    component:ContactComponent,
    canActivate:[UserAuthGuard]
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'AdminRegister',
    component: AdminRegisterComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'category/:categoryid', 
    component: CategoryDetailsComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path: 'products/:productid', 
    component: ProductDetailsComponent 
  },
  { 
    path: 'products', 
    component: ProductListComponent 
  },
  { 
    path: 'manageproducts', 
    component: ManageProductsComponent,
    canActivate:[AdminAuthGuard]
  },
  { 
    path: 'cart', 
    component: CartComponent,
    canActivate:[UserAuthGuard]
  },
  { 
    path: 'orders', 
    component: OrdersComponent,
    canActivate:[AdminAuthGuard] 
  },
  { path: 'customerorders/:customerid',
    component: CustomerOrderComponent,
    canActivate:[UserAuthGuard]  
  },
  {path: 'profile',component:UserProfileComponent},
  { path: 'category/:categoryid', component: CategoryDetailsComponent },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
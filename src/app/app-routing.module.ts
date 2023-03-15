import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './admin/components/manage-products/manage-products.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
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

const routes: Routes = [
  {
    path: 'contact' , 
    component:ContactComponent
  },
  { 
    path: 'home',
    component: HomeComponent
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
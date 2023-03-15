import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './admin/components/manage-products/manage-products.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/:productid', component: ProductDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'manageproducts', component: ManageProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cartDetails', component: CartDetailsComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'category/:categoryid', component: CategoryDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

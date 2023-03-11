import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [{path:'home' , component:HomeComponent},
{ path: 'products/:productid',component: ProductDetailsComponent},
{path:'orders' ,component:OrdersComponent},
 {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'**' , component:PageNotFoundComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AdminModule } from './admin/admin.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    ContactComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFilterPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

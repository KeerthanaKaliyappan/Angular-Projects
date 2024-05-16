import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessPageComponent } from './payment-success-page/payment-success-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorPageComponent,
    NavigationComponent,
    CartComponent,
    ProductDetailsComponent,
    RegisterProductComponent,
    LandingPageComponent,
    PaymentComponent,
    PaymentSuccessPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

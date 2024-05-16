import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessPageComponent } from './payment-success-page/payment-success-page.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'product', component: RegisterProductComponent},
  { path:'home', component: HomeComponent},
  { path:'product/:prodId', component: ProductDetailsComponent},
  { path:'cart', component: CartComponent},
  { path:'payment', component: PaymentComponent},
  { path:'paymentSuccess', component: PaymentSuccessPageComponent},
  { path:'logout', component: LoginComponent},
  { path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

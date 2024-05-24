import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path:"" ,component: HomeComponent },
  { path:"employees" ,component: EmployeeDetailsComponent },
  { path:"employees/:id" ,component: EmployeeDetailsComponent },
  { path:"**" ,component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

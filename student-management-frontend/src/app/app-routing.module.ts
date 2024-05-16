import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MarksComponent } from './marks/marks.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'student/:studentId', component: ProfileComponent},
  { path:'studentMarks/:studentId', component: MarksComponent},
  { path:'announcements', component: AnnouncementsComponent},
  { path:'logout', component: LoginComponent},
  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

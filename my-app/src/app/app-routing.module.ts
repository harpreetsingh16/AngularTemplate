import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShieldGuard } from './shield.guard';
import { LoginformComponent } from './start/loginform/loginform.component';
import { SignupComponent } from './start/signup/signup.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginformComponent},
  {path:'signup',component:SignupComponent},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[ShieldGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

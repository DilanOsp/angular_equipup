import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/containers/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { HovbarComponent } from '../core/shared/components/hovbar/hovbar.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [ 
  {
    path: '', component: PublicComponent, children:[
       { path: '', redirectTo: 'home', pathMatch: 'full'},
       { path: 'home', component: HomeComponent},
       { path:'login', component: LoginComponent},
       { path: "hovbar", component: HovbarComponent},
       { path: "register", component: RegisterComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class PublicRoutingModule { }

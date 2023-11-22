import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { HovbarComponent } from '../core/shared/components/hovbar/hovbar.component';
import { RegisterComponent } from './register/register.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CardComponent } from '../core/shared/components/card/card.component';
import { FooterComponent } from '../core/shared/components/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MyProductComponent } from './my-product/my-product.component';



const routes: Routes = [ 
  {
    path: '', component: PublicComponent, children:[
       { path: '', redirectTo: 'login', pathMatch: 'full'},
       { path: 'home', component: HomeComponent},
       { path:'login', component: LoginComponent},
       { path: "hovbar ", component: HovbarComponent},
       { path: "register", component: RegisterComponent},
       { path: "product-form", component: ProductFormComponent},
       { path: 'card', component: CardComponent},
       { path: 'footer', component: FooterComponent},
       { path: 'cart', component: CartComponent},
       { path: 'myproduct', component:MyProductComponent}
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

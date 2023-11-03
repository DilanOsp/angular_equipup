import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/containers/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { HovbarComponent } from '../core/shared/components/hovbar/hovbar.component';
import { RegisterComponent } from './register/register.component';
import { CardproductComponent } from './cardproduct/cardproduct.component';
import { ProductFormComponent } from './product-form/product-form.component';




@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    HovbarComponent,
    RegisterComponent,
    CardproductComponent,
    ProductFormComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }

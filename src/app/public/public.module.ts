import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home/home.component';
import { HovbarComponent } from '../core/shared/components/hovbar/hovbar.component';
import { RegisterComponent } from './register/register.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../core/shared/components/card/card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CartComponent } from './cart/cart.component';
import { MyProductComponent } from './my-product/my-product.component';




@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    ProductFormComponent,  
    HomeComponent,
    HovbarComponent,   
    CartComponent, MyProductComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,
    MatSnackBarModule,
    MatTableModule,
   
  ]
})
export class PublicModule { }

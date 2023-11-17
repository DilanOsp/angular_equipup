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
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    ProductFormComponent,  
    HomeComponent,
    HovbarComponent,

    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CardComponent,

    
    
  ]
})
export class PublicModule { }

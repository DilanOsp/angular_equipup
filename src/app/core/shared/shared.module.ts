import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';






@NgModule({
  declarations: [
   NotFoundComponent,


  

  
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CardComponent,
    MatCardModule,


    
  ],
  exports:[
    HttpClientModule,
    NotFoundComponent,
    RouterModule,


    
    
  ]
})
export class SharedModule { }

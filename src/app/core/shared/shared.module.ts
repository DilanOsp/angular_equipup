import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
   NotFoundComponent,

  
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    
  ],
  exports:[
    HttpClientModule,
    NotFoundComponent,
    RouterModule,
    
    
  ]
})
export class SharedModule { }

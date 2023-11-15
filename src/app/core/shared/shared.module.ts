import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




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
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatToolbarModule,
    
  ]
})
export class SharedModule { }

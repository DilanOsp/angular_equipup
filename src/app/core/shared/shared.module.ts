import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MatBadgeModule } from '@angular/material/badge';




@NgModule({
  declarations: [
   NotFoundComponent,
   FooterComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CardComponent,
    MatCardModule,
    MatToolbarModule,
    MatIconModule


    
  ],
  exports:[
    HttpClientModule,
    NotFoundComponent,
    RouterModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatToolbarModule,
    FooterComponent,
    MatBadgeModule
    
  ]
})
export class SharedModule { }

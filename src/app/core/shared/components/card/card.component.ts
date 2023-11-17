import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { product } from 'src/app/shared/model/product';
import { productData } from 'src/app/shared/model/productData';
import { ProductService } from 'src/app/shared/servces/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule,   CommonModule  ],
})
export class CardComponent  implements OnInit{
  products: productData[] = [];
  constructor(private productService : ProductService){}
  ngOnInit(): void {
      this.getAllProducts();
    
  }
  private test(): void{
    this.productService.test().subscribe(
      (response)=>{
        response.forEach(element => {
          console.log(element)
        });
      }
    )
  }


  private getAllProducts(): void{
    this.productService.getAll().subscribe(
      (reponse) =>{
        this.products = reponse;
        reponse.forEach(element => {
          console.log(element.product.name)
        });
        
      },
      error =>{
        console.log(error)
      }
    );
  }
  
  

}

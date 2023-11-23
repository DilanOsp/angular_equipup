import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output ,Input, OnDestroy} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { productData } from 'src/app/shared/model/productData';
import { CartService } from 'src/app/shared/servces/cart.service';
import { LocalStorageService } from 'src/app/shared/servces/localStorage.service';
import { ProductService } from 'src/app/shared/servces/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
})
export class CardComponent implements OnInit {

  
  @Input() product!: productData; 

  products: productData[] = [];
  dataSend: productData[]=[];
  
  
  constructor(private productService: ProductService,private cartService:CartService, private localStorageService:LocalStorageService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  addToList(product:productData) {
    this.localStorageService.setItem(product);
  }

  private getAllProducts(): void {
    this.productService.getAll().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

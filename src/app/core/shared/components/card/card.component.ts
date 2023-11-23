import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output ,Input, OnDestroy} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  
  
  constructor(private _snackBar: MatSnackBar,private productService: ProductService,private cartService:CartService, private localStorageService:LocalStorageService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, 
    });
  }

  addToList(product:productData) {
    this.localStorageService.setItem(product);
    this.openSnackBar("producto añadido","cerrar")
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

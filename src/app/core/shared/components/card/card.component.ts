import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { productData } from 'src/app/shared/model/productData';
import { ProductService } from 'src/app/shared/servces/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
})
export class CardComponent implements OnInit {
  @Output() agregarCarrito = new EventEmitter<productData>(); // Nuevo EventEmitter para el evento de agregar al carrito

  products: productData[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
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

  agregarAlCarrito(producto: productData) {
    // Emitir el evento para agregar al carrito
    this.agregarCarrito.emit(producto);
  }
}

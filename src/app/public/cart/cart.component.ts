import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productData } from 'src/app/shared/model/productData';
import { CartService } from 'src/app/shared/servces/cart.service';
import { LocalStorageService } from 'src/app/shared/servces/localStorage.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit{
  constructor(private cartService:CartService, private localStorageService:LocalStorageService){}
  dataSource = new MatTableDataSource<productData>([]);
  ngOnInit(): void {
    const ELEMENT_DATA: productData[] = this.localStorageService.getList();
    this.dataSource.data = ELEMENT_DATA;

  }

  displayedColumns: string[] = ['image', 'name', 'price', 'delete'];

  eliminarElemento(element: productData): void {
  }


  comprarElemento(element: PeriodicElement): void {
    console.log('Comprar elemento:', element);
  }
  calcularTotal(): string {
    return '';
  }
  comprarTodo(): void {
    console.log('Comprar todo:', this.dataSource);
  }
}

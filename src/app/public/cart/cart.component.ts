import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  constructor(private cartService:CartService, private localStorageService:LocalStorageService,    private cdr: ChangeDetectorRef // Agrega el ChangeDetectorRef
  ){}
  dataSource = new MatTableDataSource<productData>([]);
  total:number = 0;
  ngOnInit(): void {
    const ELEMENT_DATA: productData[] = this.localStorageService.getList();
    this.dataSource.data = ELEMENT_DATA;
    this.total = this.dataSource.data.reduce((total, product) => total + product.product.price, 0);

  

  }

  displayedColumns: string[] = ['image', 'name', 'price', 'delete'];

  delete(element: productData): void {

    
    this.localStorageService.delete(element);
    this.dataSource.data = this.localStorageService.getList();
    this.total = this.dataSource.data.reduce((total, product) => total + product.product.price, 0);




    
  }
  buy(){
    this.open();
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
  open(): void {
    const data = this.localStorageService.getList();
    const contenidoHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #0066cc;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
      <title>Factura</title>
    </head>
    <body>
      <h1>Factura</h1>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(item => `
            <tr>
              <td>${item.product.name}</td>
              <td>${1}</td>
              <td>${item.product.price}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <p>Total: $${this.total}</p>
    </body>
    </html>
  `;
  this.dataSource.data = [];
  this.localStorageService.clean();
  this.total = 0;

  const nuevaPestana = window.open();
  
    if (nuevaPestana) {
      nuevaPestana.document.write(contenidoHTML);
    } else {
      console.error('No se pudo abrir la nueva pestaña.');
    }
    }


  
}

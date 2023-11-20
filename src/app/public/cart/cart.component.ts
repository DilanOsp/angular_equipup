import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Taladro', weight: 1, symbol: '10.000' },
  { position: 2, name: 'Sillas', weight: 12, symbol: '20.000' },
  { position: 3, name: 'Lavadora', weight: 1, symbol: '8.000' },
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete', 'buy'];
  dataSource = ELEMENT_DATA;

  // Nuevas funciones para los botones
  eliminarElemento(element: PeriodicElement): void {
    // Lógica para eliminar el elemento, por ejemplo, eliminarlo del dataSource
    this.dataSource = this.dataSource.filter(e => e !== element);
  }

  comprarElemento(element: PeriodicElement): void {
    // Lógica para comprar el elemento, puedes implementar lo que necesites aquí
    console.log('Comprar elemento:', element);
  }
  calcularTotal(): string {
    const total = this.dataSource.reduce((acc, curr) => acc + parseFloat(curr.symbol), 0);
    return total.toFixed(3); // Ajusta el número de decimales según tus necesidades
  }
  // Función para comprar todo
  comprarTodo(): void {
    // Lógica para comprar todo, por ejemplo, enviar la lista al servidor
    console.log('Comprar todo:', this.dataSource);
  }
}

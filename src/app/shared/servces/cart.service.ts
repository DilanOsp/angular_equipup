import { EventEmitter, Injectable, Output } from '@angular/core';
import { productData } from '../model/productData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
 
  private selectedProductSource = new BehaviorSubject<productData[] | null>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  sendToComponet(product: productData[]) {
    this.selectedProductSource.next(product);
  }

  

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { productData } from '../model/productData';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  private localStorageKey = 'list';


  
  getList(): productData[] {
    const storedList = localStorage.getItem(this.localStorageKey);
    return storedList ? JSON.parse(storedList) : [];
  }

  setItem(item: any): void {
    const currentList = this.getList(); 
    currentList.push(item)

    localStorage.setItem(this.localStorageKey, JSON.stringify(currentList));
  }
  delete(item:productData){
    const currentList:productData[] = this.getList(); 
    const index = currentList.findIndex(existingItem => existingItem.product.id === item.product.id);
    console.log(index)
    if (index !== -1) {
      currentList.splice(index, 1);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentList));


  }
  clean(){
    
    localStorage.setItem(this.localStorageKey, JSON.stringify([]));


  }


}

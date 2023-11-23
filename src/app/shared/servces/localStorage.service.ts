import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  private localStorageKey = 'list';

  
  getList(): any[] {
    const storedList = localStorage.getItem(this.localStorageKey);
    return storedList ? JSON.parse(storedList) : [];
  }

  setList(newList: any[]): void {
    const currentList = this.getList(); 
    const combinedList = [...currentList, ...newList]; 

    localStorage.setItem(this.localStorageKey, JSON.stringify(combinedList));
  }


}

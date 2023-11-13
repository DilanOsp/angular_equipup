import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = environment.apiUrl+ environment.product.path
  constructor(private _http: HttpClient) { }
  save(body: product):Observable<product>{
    return this._http.post<product>(this._url,body);  
  }  
  getAll():Observable<product[]>{
    return this._http.get<product[]>(this._url)
  }



}

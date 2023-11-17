import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments';
import { product } from '../model/product';
import { person } from '../model/person';
import { productData } from '../model/productData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = environment.apiUrl+ environment.product.path
  constructor(private _http: HttpClient) { }
  save(body: product):Observable<product>{
    return this._http.post<product>(this._url,body);  
  }  
  getAll():Observable<productData[]>{
    return this._http.get<productData[]>(this._url)
  }
  test():Observable<person[]>{
    return this._http.get<person[]>("https://642f412bc26d69edc879689e.mockapi.io/movie")
  }



}

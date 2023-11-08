import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { environment } from 'src/enviroments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = environment.apiUrl+ environment.user.path

  constructor(private _http: HttpClient) { }
  save(body: user):Observable<user>{
    return this._http.post<user>(this._url,body);  
  }
  getByMail(mail:string):Observable<user>{
    return this._http.get<user>(this._url+environment.user.get+mail)
  }



}

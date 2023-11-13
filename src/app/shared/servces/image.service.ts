import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http: HttpClient) { }
  private apiUrl = 'https://api.imgbb.com/1/upload';
  private apiKey = '071ca46b81401f81bf077358dc303ccb';
  uploadImage(imageData: FormData): Observable<any> {
    const params = {
      expiration: '600',
      key: this.apiKey
    };

    return this._http.post(this.apiUrl, imageData, { params });
  }


}

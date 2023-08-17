import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpTutorialService {



  public getList():Observable<any>{
    return this._http.get("https://dummyjson.com/products");
  }
  constructor(private _http:HttpClient) {}
}

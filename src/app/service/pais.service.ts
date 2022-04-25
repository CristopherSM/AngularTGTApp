import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  baseUrl:string = "https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  getAllPaises() : Observable<any>{
    return this.http.get(this.baseUrl + "/paises");
  }
}

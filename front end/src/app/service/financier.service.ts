import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Financier} from "../../participant"
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class FinancierService {

  private apiUrl = "http://localhost:3000/financier"
  constructor(private http: HttpClient) { }

  getFinanciers():Observable<Financier[]> {
    console.log(this.http.get<Financier[]>(this.apiUrl))
    return this.http.get<Financier[]>(this.apiUrl);
  }

  addFinancier(financier:Financier):Observable<Financier>{
    console.log(financier)
    return this.http.post<Financier>(this.apiUrl,financier)
  }
 


  
}

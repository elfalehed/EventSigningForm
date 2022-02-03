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

  private apiUrl = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }

  getFinanciers():Observable<Financier[]> {
    const Url="http://localhost:3000/user/afficher_financier"
    console.log(this.http.get<Financier[]>(Url))
    return this.http.get<Financier[]>(Url);
  }

  addFinancier(financier:Financier):Observable<Financier>{
    const Url="http://localhost:3000/user/ajouter_financier"
    console.log(financier)
    return this.http.post<Financier>(Url,financier)
  }
 


  
}

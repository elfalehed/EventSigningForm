import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {Ambassadeur} from "../../participant"
import {HttpClient,HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};


@Injectable({
  providedIn: 'root'
})

export class AmbassadeurService {
  private apiUrl = "http://localhost:3000/ambassadeur"
  constructor(private http: HttpClient) { }

  getAmbassadeurs():Observable<Ambassadeur[]> {
    console.log(this.http.get<Ambassadeur[]>(this.apiUrl))
    return this.http.get<Ambassadeur[]>(this.apiUrl);
  }

  addAmbassadeur(ambassadeur:Ambassadeur):Observable<Ambassadeur>{
    console.log(ambassadeur)
    return this.http.post<Ambassadeur>(this.apiUrl,ambassadeur)
  }

}

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
  
  constructor(private http: HttpClient) { }

  getAmbassadeurs():Observable<Ambassadeur[]> {
    const apiUrl = "http://localhost:3000/ambassadeur/allamb"
    console.log(this.http.get<Ambassadeur[]>(apiUrl))
    return this.http.get<Ambassadeur[]>(apiUrl);
  }

  addAmbassadeur(ambassadeur:Ambassadeur):Observable<Ambassadeur>{
     const apiUrl = "http://localhost:3000/ambassadeur/addamb"
    console.log(ambassadeur)
    return this.http.post<Ambassadeur>(apiUrl,ambassadeur)
  }

}

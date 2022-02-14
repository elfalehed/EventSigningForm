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
    const apiUrl = "http://localhost:3000/user/afficher_ambassadeur"
    console.log(this.http.get<Ambassadeur[]>(apiUrl))
    return this.http.get<Ambassadeur[]>(apiUrl);
  }
  getAmbassadeursparville(governorate: any):Observable<Ambassadeur[]> {
    const apiUrl = "http://localhost:3000/user/amb_ville"
    // this.http.post<Ambassadeur[]>(apiUrl,governorate).subscribe((ambassadeur)=>{
      
    //   console.log("fiservice",ambassadeur)
    // })
    console.log("fiservice",governorate)
    return this.http.post<any>(apiUrl,governorate);
    
  }

  getOneAmbassadeurs(id:number):Observable<Ambassadeur[]> {
    const apiUrl = "http://localhost:3000/user"
    console.log(this.http.get<Ambassadeur[]>(`${apiUrl}/${id}`))
    return this.http.get<Ambassadeur[]>(`${apiUrl}/${id}`);
  }

  addAmbassadeur(ambassadeur:Ambassadeur):Observable<Ambassadeur>{
     const apiUrl = "http://localhost:3000/user/ajouter_Ambassadeur"
    console.log(ambassadeur)
    return this.http.post<Ambassadeur>(apiUrl,ambassadeur)
  }

}

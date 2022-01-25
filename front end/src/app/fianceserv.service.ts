import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FianceservService {

  constructor(private httpClient: HttpClient, ) { }
  
  getdata(): Observable<any> {
    const url = "http://localhost:3000/user/allUsers"
    return this.httpClient.get<any>(url);
  }
}

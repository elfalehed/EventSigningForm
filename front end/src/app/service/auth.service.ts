import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public token!:string;
  private helper = new JwtHelperService();



  constructor(private router: Router,private http: HttpClient) { }
  
  logout() {
    this.isloggedIn=true
    this.router.navigate(['/']);
    }
    saveToken(jwt:string){
      localStorage.setItem('jwt',jwt);
      this.token = jwt;
      }
    
      login(user:any):Observable<any>{ 
       
       const apiUrl = "http://localhost:3000/user/login"
       console.log(user)
       this.isloggedIn= true;
       localStorage.setItem('isloggedIn',String(this.isloggedIn));
        return this.http.post<any>(apiUrl,user)
      }   
}
 
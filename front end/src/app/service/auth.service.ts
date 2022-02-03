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
    this.isloggedIn= false;
    this.loggedUser!= undefined;
    
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/']);
    }
    saveToken(jwt:string){
      localStorage.setItem('jwt',jwt);
      this.token = jwt;
      this.isloggedIn = true; 
      this.decodeJWT();

      }
      isTokenExpired(): Boolean{
      return this.helper.isTokenExpired(this.token); }
      loadToken() {
        this.token != localStorage.getItem('jwt');
        this.decodeJWT();

      }
      decodeJWT(){
        if (this.token == undefined)
        return;
        const decodedToken = this.helper.decodeToken(this.token);

        this.loggedUser = decodedToken.sub;
      }

      getToken():string {
        return this.token;
        
      }
    
      login(user:any):Observable<any>{ 
       
       const apiUrl = "http://localhost:3000/user/login"
       console.log(user)
        return this.http.post<any>(apiUrl,user)
      }   
}

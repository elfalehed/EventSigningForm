import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser!:string;
  public isloggedIn!: Boolean;
  public isauth:any;
  public token!:string;
  public user!:any;
  private helper = new JwtHelperService();



  constructor(private router: Router,private http: HttpClient) { }
  
  logout() {
    this.isloggedIn=false
    this.router.navigate(['/']);
    }
    saveToken(jwt:string){
      localStorage.setItem('jwt',jwt);
      this.token = jwt;
      }
      public getToken(){
        return localStorage.getItem('jwt');
    
      }
      public getUser() {
        const token=this.getToken()
        if(token){
          return jwt_decode(token)
        }
        }
    
      login(user:any):Observable<any>{ 
       
       const apiUrl = "http://localhost:3000/user/login"
      //  console.log(user)
       this.isloggedIn= true;
       
       localStorage.setItem('isloggedIn',String(this.isloggedIn));
        return this.http.post<any>(apiUrl,user)
      }  
      getroleuserconect(){
        this.user=this.getUser()
        return this.user.type
      } 
} 
 
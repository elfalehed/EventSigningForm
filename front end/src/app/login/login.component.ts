import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup;
  constructor(private authserv :AuthService ,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginform =this.formBuilder.group({

      mail:['',], 
      password:['',]
    })
  }
  onLoggedin(){
    console.log("azerty",this.loginform.value)
     this.authserv.login(this.loginform.value).subscribe(user=>{console.log("userfron back",user.user.role)
      this.authserv.saveToken(user.token)
      console.log("waa 7ouma")
      if(user.user.role==="admin"){
        this.router.navigate(['/Admin-dash'])
      } 
      if(user.user.role==="Ambassadeur"){
        this.router.navigate(['/ambassadeurs-dash'])
      }
      if(user.user.role==="Financier"){
        this.router.navigate(['/finance-dash'])
      }
      if(user.user.role==="Participant"){
        this.router.navigate(['/ambassadeurs'])
      }
      else{
        console.log("aaaaaaaaaaa")
      }

    }
     
    );
    
   
  }
   
    

}

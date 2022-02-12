import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  user:any;
  constructor(public authService:AuthService) { }
  
  ngOnInit(): void {
    console.log("hello")
    if(localStorage.getItem('isloggedIn') === "false"|| localStorage.getItem('isloggedIn') ===null){
    this.authService.isauth="false"
    }else{
     
      this.authService.isauth=localStorage.getItem('isloggedIn')
    }
    this.user=this.authService.getUser()
    console.log("userconnect",this.user.type)
  } 
  logout(){
    this.authService.logout();
    localStorage.clear();
    location.reload();
  }

}

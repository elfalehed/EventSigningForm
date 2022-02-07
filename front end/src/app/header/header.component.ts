import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth:any;
  constructor(public authService:AuthService) { }
  
  ngOnInit(): void {
    this.authService.isloggedIn
  }
  logout(){
    this.authService.logout();
    localStorage.clear();
  }

}

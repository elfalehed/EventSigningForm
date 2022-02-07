import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'area01';
  constructor(public authService:AuthService){
  }
  ngOnInit(): void {
    this.authService.isloggedIn
  }
}

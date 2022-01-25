import { Component, OnInit } from '@angular/core';
import { FianceservService } from '../fianceserv.service';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.scss']
})
export class DashbordAdminComponent implements OnInit {
  constructor(private serv:FianceservService) { }
 
  ngOnInit(): void {
 
  }

getdb(){
 
}


}

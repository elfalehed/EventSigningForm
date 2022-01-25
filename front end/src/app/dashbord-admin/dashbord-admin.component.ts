import { Component, OnInit } from '@angular/core';
import { FianceservService } from '../fianceserv.service';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.scss']
})
export class DashbordAdminComponent implements OnInit {
  constructor(private serv:FianceservService) { }
  myDropDown : string="chh";
  particepant:any[]=[];
  gouvernerat!:string;
  ngOnInit(): void {
  this.getdb()
  }
  onChangeofOptions(newGov:any) {
   this.gouvernerat=newGov;
}
getdb(){
  this.serv.getdata().subscribe((data)=>{
    this.particepant=data
  })
}


}

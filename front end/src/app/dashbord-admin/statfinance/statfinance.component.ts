import { Component, OnInit } from '@angular/core';
import { FianceservService } from 'src/app/fianceserv.service';

@Component({
  selector: 'app-statfinance',
  templateUrl: './statfinance.component.html',
  styleUrls: ['./statfinance.component.scss']
})
export class StatfinanceComponent implements OnInit {

  myDropDown : string="chh";
  particepant:any[]=[];
  gouvernerat!:string;
  constructor(private serv:FianceservService) { }
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

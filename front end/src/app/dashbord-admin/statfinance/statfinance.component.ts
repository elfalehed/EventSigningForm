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
  govParticepant:any[]=[];
  facList:any[]=[]
  constructor(private serv:FianceservService) { }
  ngOnInit(): void {
  this.getdb()
  }
  onChangeofOptions(newGov:any) {
   this.gouvernerat=newGov;
    this.govParticepant.filter(p=> p.governorate==newGov )
    this.facList=this.govParticepant.map((p,pos)=>{

      return this.govParticepant.indexOf(p)==pos

      // (array, key) => {
      //   return array.reduce((arr, item) => {
      //     const removed = arr.filter(i => i[key] !== item[key]);
      //     return [...removed, item];
      //   }, []);
    })

}

justTest(){
  return "hello"
}
getdb(){
  this.serv.getdata().subscribe((data)=>{
    this.particepant=data
  })
}


}

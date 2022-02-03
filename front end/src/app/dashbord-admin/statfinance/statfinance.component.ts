import { Component, OnInit } from '@angular/core';
import { FianceservService } from 'src/app/fianceserv.service';
import { ParticipantService } from 'src/app/service/participant.service';
import { Participant } from 'src/participant';

@Component({
  selector: 'app-statfinance',
  templateUrl: './statfinance.component.html',
  styleUrls: ['./statfinance.component.scss']
})
export class StatfinanceComponent implements OnInit {

  myDropDown : string="chh";
  ParticipantList:any[]=[];
  gouvernerat!:string;
  govParticepant:any[]=[];
  facList:any[]=[]
  constructor(private participantService : ParticipantService ,private serv:FianceservService) { }
  ngOnInit(): void {
    this.participantService.getParticipants().subscribe((participant:Participant[])=>{
      console.log(participant)
      this.ParticipantList=participant
      
 
    })
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

whoPay(ParticipantList:any){
  let n =0;

  for (let entry of ParticipantList) {
    if(entry.pay==true) n++;
}

return n

}

}

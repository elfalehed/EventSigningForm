import { Component, OnInit } from '@angular/core';
import { FianceservService } from 'src/app/fianceserv.service';
import { AmbassadeurService } from 'src/app/service/ambassadeur.service';
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
  nbpay!:number
  nbAmbassadeur:any
  constructor(private ambassadeurService : AmbassadeurService,private participantService : ParticipantService ,private serv:FianceservService) { }
  ngOnInit(): void {
    this.participantService.getParticipants().subscribe((participant:Participant[])=>{
      console.log(participant)
      this.ParticipantList=participant
      this.govParticepant=participant
      this.whoPay(participant)
    })

    this.ambassadeurService.getAmbassadeurs().subscribe((ambassadeur:any[])=>{
     this.nbAmbassadeur=ambassadeur.length
 
    })

  }
  onChangeofOptions(newGov:any) {
   this.gouvernerat=newGov;
    console.log(newGov)
    console.log(this.ParticipantList)
    this.govParticepant=this.ParticipantList.filter(p=> p.governorate==newGov )

    console.log(this.govParticepant)
    this.facList=this.govParticepant.map((p,pos)=>{

      return this.govParticepant.indexOf(p)==pos

      // (array, key) => {
      //   return array.reduce((arr, item) => {
      //     const removed = arr.filter(i => i[key] !== item[key]);
      //     return [...removed, item];
      //   }, []);
    })

    this.whoPay(this.govParticepant)
    

}

justTest(){
  return "hello"
}

whoPay(ParticipantList:any){
  let n =0;

  for (let entry of ParticipantList) {
    if(entry.pay==true) n++;
}

  this.nbpay=n;

}

}

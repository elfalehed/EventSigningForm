import { Component, OnInit } from '@angular/core';
import {Participant} from "../../participant";
import {ParticipantService} from "../service/participant.service"
import {AmbassadeurService} from "../service/ambassadeur.service"


@Component({
  selector: 'app-ambassadeur-dash',
  templateUrl: './ambassadeur-dash.component.html',
  styleUrls: ['./ambassadeur-dash.component.scss']
})
export class AmbassadeurDashComponent implements OnInit {
  ParticipantList : Participant[]=[
  
   
   
  ]
  payList : Participant[]=[];
  notPayList : Participant[]=[];
  onChange(e:any,participant:Participant){
    console.log(participant)
   
    participant.pay=! participant.pay
    this.ParticipantList.map(p=>{
      if(p._id==participant._id){
          p=participant
      }
    })
    this.payList = this.ParticipantList.filter(
      Part => Part.pay==true );

      this.notPayList = this.ParticipantList.filter(
        (Part:Participant) => Part.pay==false )
    this.modifyTask(participant)
    console.log(participant)
  }

  constructor(private participantService : ParticipantService ,private ambassadeurService: AmbassadeurService) { }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe((participant:Participant[])=>{
      console.log(participant)
      this.ParticipantList=participant
      this.payList = participant.filter(
        Part => Part.pay==true );

        this.notPayList = participant.filter(
          (Part:Participant) => Part.pay==false );
    })

    // this.ambassadeurService.getOneAmbassadeurs(12).subscribe(ambassadeur=>{
    //   console.log(ambassadeur)
    // })

  }

  modifyTask(participant:Participant){
    this.participantService.modifyParticipant(participant).subscribe((data:any) => participant._id = data._id);
    console.log(participant._id)
    
    // this.taskService.getTasks().subscribe((task)=>(this.tasks=task))
    // this.participantService.getParticipants().subscribe((participant:Participant[])=>{
    //   this.ParticipantList=participant
    //   this.payList = participant.filter(
    //     Part => Part.pay==true );

    //     this.notPayList = participant.filter(
    //       (Part:Participant) => Part.pay==false );
    // })

   }
  

}

import { Component, OnInit } from '@angular/core';
import {Participant} from "../../participant";
import {ParticipantService} from "../service/participant.service"

@Component({
  selector: 'app-ambassadeur-dash',
  templateUrl: './ambassadeur-dash.component.html',
  styleUrls: ['./ambassadeur-dash.component.scss']
})
export class AmbassadeurDashComponent implements OnInit {
  ParticipantList : Participant[]=[
    {
    id:1  ,
    cin: "13467075",
    FirstName: "Fahmi",
    LastName: "Ben Z",
    mail: "fahmi@gmail.com",
    Gender: "Male",
    DateOfBirth: "14/08/95",
    Phone: 52002119,
    governorate: "Mednine",
    university: "Isimed",
    pay : true
    },
    {
      id:2,
    cin: "13467070",
    FirstName: "amine",
    LastName: "bay",
    mail: "fahmi@gmail.com",
    Gender: "Male",
    DateOfBirth: "14/08/95",
    Phone: 52002119,
    governorate: "Mednine",
    university: "Isimed",
    pay : false
    }
   
   
  ]
  payList : Participant[]=[];
  notPayList : Participant[]=[];
  onChange(e:any,participant:Participant){
    console.log(participant)
   
    participant.pay=! participant.pay
    this.ParticipantList.map(p=>{
      if(p.id==participant.id){
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

  constructor(private participantService : ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe((participant:Participant[])=>{
      this.ParticipantList=participant
      this.payList = participant.filter(
        Part => Part.pay==true );

        this.notPayList = participant.filter(
          (Part:Participant) => Part.pay==false );
    })


  }

  modifyTask(participant:Participant){
    this.participantService.modifyParticipant(participant).subscribe((data:any) => participant.id = data.id);
    console.log(participant.id)
    
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

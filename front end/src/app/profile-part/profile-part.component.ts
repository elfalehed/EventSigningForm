import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-profile-part',
  templateUrl: './profile-part.component.html',
  styleUrls: ['./profile-part.component.scss']
})
export class ProfilePartComponent implements OnInit {
  token:any;
  user:any;
  constructor(public authService:AuthService ,public SevPar: ParticipantService) { }

  ngOnInit(): void {
    this.token=this.authService.getUser()
    console.log("userconnect",this.token)
    this.SevPar.getuser(this.token._id).subscribe((part)=>{
      console.log("ficomp",part)
      this.user=part;
    })
  }

}

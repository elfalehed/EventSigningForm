import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-profile-part',
  templateUrl: './profile-part.component.html',
  styleUrls: ['./profile-part.component.scss']
})
export class ProfilePartComponent implements OnInit {
  token: any;
  user: any;
  constructor(public authService: AuthService, public SevPar: ParticipantService) { }

  type: string = '';
  cin1: string = '';
  cin2: string = '';
  titre: string = '';

  onTypeChange = (e: any) => {
    this.type = e.target.value;
  }

  ngOnInit (): void {
    this.token = this.authService.getUser()
    console.log("userconnect", this.token)
    this.SevPar.getuser(this.token._id).subscribe((part) => {
      console.log("ficomp", part)
      this.user = part;
    })
  }

  onFieldChange = ($event: any, name: any) => {
    switch (name) {
      case 'cin1':
        this.cin1 = $event.target.value;
        break;
      case 'cin2':
        this.cin2 = $event.target.value;
        break;
      case 'titre':
        this.titre = $event.target.value;
        break;
    }


  }

  submit = () => {
    if (this.type === "visteur") {
      this.SevPar.register(this.type, '', '', '');
    } else {
      if (!this.cin1) {
        alert("Veuillez saisir le CIN 1");
      }
      this.SevPar.register(this.type, this.cin1, this.cin2, this.titre);
    }
  }

}

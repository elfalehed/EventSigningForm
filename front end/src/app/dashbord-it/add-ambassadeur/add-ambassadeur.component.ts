import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import {Ambassadeur} from "../../../participant";
import {AmbassadeurService} from "../../service/ambassadeur.service"


@Component({
  selector: 'app-add-ambassadeur',
  templateUrl: './add-ambassadeur.component.html',
  styleUrls: ['./add-ambassadeur.component.scss']
})
export class AddAmbassadeurComponent implements OnInit {

  AmbassadeurList : any[] =[]
  ambassadeurform!:FormGroup;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private ambassadeurService : AmbassadeurService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log(this.options);
    this.ambassadeurform =this.formBuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      email : ['',Validators.email], 
      psw:['',Validators.required],
      cfpsw:['',Validators.required],
      cin : ['',Validators.required],
      gender : ['',Validators.required],
      dateOfBirth : ['',Validators.required],
      phone : ['',Validators.required],
      governorate : ['',Validators.required],
      university : ['',Validators.required],

    })

    this.ambassadeurService.getAmbassadeurs().subscribe((ambassadeur:Ambassadeur[])=>{
      this.AmbassadeurList=ambassadeur
      console.log(ambassadeur)
 
    })


}




addAmbassadeur(ambassadeur:Ambassadeur){
  this.ambassadeurService.addAmbassadeur(ambassadeur).subscribe((ambassadeur:any)=> {
    console.log(ambassadeur.user)
    this.AmbassadeurList.push(ambassadeur.user)
  }
   
    
    )
 

 }
 
onSubmit(){

if( this.ambassadeurform.valid){
  // console.log(this.participantform.get('gender')?.value)

  const newAmbassadeur:Ambassadeur={
     cin : this.ambassadeurform.value.cin,
     FirstName :this.ambassadeurform.value.FirstName,
     LastName :this.ambassadeurform.value.LastName,
     mail :this.ambassadeurform.value.email,
     psw :this.ambassadeurform.value.psw,
     Gender :this.ambassadeurform.value.gender,
     DateOfBirth :this.ambassadeurform.value.dateOfBirth,
     Phone :this.ambassadeurform.value.phone,
     governorate :this.ambassadeurform.value.governorate,
     university :this.ambassadeurform.value.university,
     
   }
 this.addAmbassadeur(newAmbassadeur)
 console.log(this.AmbassadeurList)

 this.ambassadeurform.reset();
}
else {
alert("not")
}

}


checkPasswords() { // here we have the 'passwords' group
  const password = this.ambassadeurform.value.psw;
  const confirmPassword = this.ambassadeurform.value.cfpsw;
 
  return password === confirmPassword ? null : { notSame: true }
    
}

}

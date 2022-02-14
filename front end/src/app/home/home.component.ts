import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl ,FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Participant} from "../../participant"
import {ParticipantService} from "../service/participant.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  participants:Participant[]=[];
  
  participantform!:FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  gov!:string;
  arr=[
    {
      gov:"sfax",
      fac:"Faculté des Sciences Economiques et de Gestion de Sfax",
    },
    {
     gov:"sfax",
     fac:"Faculté de Médecine de Sfax",
   },
   {
     gov:"sfax",
     fac:"Faculté de droit de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur des Arts et Métiers de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur d'Electronique et de Communication de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur de Gestion Industrielle de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut des Hautes Etudes Commerciales de Sfax",
   },
   {
     gov:"sfax",
     fac:"Faculté des Sciences de Sfax",
   },
   {
     gov:"sfax",
     fac:"Ecole Nationale d'Ingénieurs de Sfax",
   },
   {
     gov:"sfax",
     fac:"Ecole Supérieure de Commerce de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur d'Administration des Affaires de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur d'Informatique et de Multimédia de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur de Musique de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur du Sport et de l'Education Physique de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur de Biotechnologies de Sfax",
   },
   {
     gov:"sfax",
     fac:"Faculté des Lettres et Sciences Humaines de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Zitouna de Sfax",
   },
   {
     gov:"sfax",
     fac:"Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
   },
   {
     gov:"sfax",
     fac:"Institut Supérieur des Sciences infirmières de Sfax",
   },
 ]

  constructor(private participantService : ParticipantService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  

    this.participantform =this.formBuilder.group({
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
    //  this.participantform = new FormGroup({
    //   'FirstName' : new FormControl(),
    //   'LastName' : new FormControl(null),
    //   'email' : new FormControl(null),
    //   'cin' : new FormControl(null),
    //   'gender' : new FormControl(null),
    //   'dateOfBirth' : new FormControl(null),
    //   'phone' : new FormControl(null),
    //   'governorate' : new FormControl(null),
    //   'university' : new FormControl(null),
      
    // })
  }

  onChange(e:any){

    console.log(e.target.value)
    this.gov=e.target.value
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  filtredArray(gov:string){

  let arr=[
       {
         gov:"sfax",
         fac:"Faculté des Sciences Economiques et de Gestion de Sfax",
       },
       {
        gov:"sfax",
        fac:"Faculté de Médecine de Sfax",
      },
      {
        gov:"Faculté de droit de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur des Arts et Métiers de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur d'Electronique et de Communication de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur de Gestion Industrielle de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut des Hautes Etudes Commerciales de Sfax",
      },
      {
        gov:"sfax",
        fac:"Faculté des Sciences de Sfax",
      },
      {
        gov:"sfax",
        fac:"Ecole Nationale d'Ingénieurs de Sfax",
      },
      {
        gov:"sfax",
        fac:"Ecole Supérieure de Commerce de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur d'Administration des Affaires de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur d'Informatique et de Multimédia de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur de Musique de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur du Sport et de l'Education Physique de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur de Biotechnologies de Sfax",
      },
      {
        gov:"sfax",
        fac:"Faculté des Lettres et Sciences Humaines de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Zitouna de Sfax",
      },
      {
        gov:"sfax",
        fac:"Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
      },
      {
        gov:"sfax",
        fac:"Institut Supérieur des Sciences infirmières de Sfax",
      },
    ]

    console.log(gov)
    
    return arr.filter(op => op.gov==gov);

  }


  addParticipan(Participant:Participant){
    this.participantService.addParticipant(Participant).subscribe((participant)=>(this.participants.push(participant)))
   

   }
   
onSubmit(){

  if( this.participantform.valid){
    console.log(this.participantform.get('gender')?.value)

    const newParticipant:Participant={
       cin : this.participantform.value.cin,
       FirstName :this.participantform.value.FirstName,
       LastName :this.participantform.value.LastName,
       mail :this.participantform.value.email,
       psw :this.participantform.value.psw,
       Gender :this.participantform.value.gender,
       DateOfBirth :this.participantform.value.dateOfBirth,
       Phone :this.participantform.value.phone,
       governorate :this.participantform.value.governorate,
       university :this.participantform.value.university,
       pay:false
     }
   this.addParticipan(newParticipant)
   console.log(this.participants)



  this.participantform.reset();

  }
else {
  alert("not")
}
  
}

checkPasswords() { // here we have the 'passwords' group
  const password = this.participantform.value.psw;
  const confirmPassword = this.participantform.value.cfpsw;
 
  return password === confirmPassword ? null : { notSame: true }
    
}


}

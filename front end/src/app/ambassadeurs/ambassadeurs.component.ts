import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {AmbassadeurService} from "../service/ambassadeur.service"

@Component({
  selector: 'app-ambassadeurs',
  templateUrl: './ambassadeurs.component.html',
  styleUrls: ['./ambassadeurs.component.scss']
})
export class AmbassadeursComponent implements OnInit {

  constructor(private ambassadeurService:AmbassadeurService) { }

  selected:boolean=false
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  AmbassadeurList :any[]=[]
  Ambassadeur:any={}
  ngOnInit() {
    this.ambassadeurService.getAmbassadeurs().subscribe((ambassadeur)=>{
      this.AmbassadeurList=ambassadeur

      console.log(ambassadeur)
 
    })
  
  }
onchange(e:any){
  console.log(e.target.value)
  // if(e.target.value=="institut supérieur d'informatique de medenine"){
  //   this.selected=true;
  // }

  this.Ambassadeur=this.AmbassadeurList.find(amb=>amb.governorate==e.target.value)
  console.log(this.Ambassadeur)
  this.selected=true;




}

}

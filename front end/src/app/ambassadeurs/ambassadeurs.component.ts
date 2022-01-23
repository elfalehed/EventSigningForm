import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ambassadeurs',
  templateUrl: './ambassadeurs.component.html',
  styleUrls: ['./ambassadeurs.component.scss']
})
export class AmbassadeursComponent implements OnInit {

  constructor() { }

  selected:boolean=false
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
   
  
  }
onchange(e:any){
  console.log(e.target.value)
  if(e.target.value=="institut supérieur d'informatique de medenine"){
    this.selected=true;
  }

}

}

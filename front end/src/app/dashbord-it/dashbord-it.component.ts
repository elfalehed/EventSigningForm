import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import {Financier} from "../../participant";
import { AuthService } from '../service/auth.service';
import {FinancierService} from "../service/financier.service"


@Component({
  selector: 'app-dashbord-it',
  templateUrl: './dashbord-it.component.html',
  styleUrls: ['./dashbord-it.component.scss']
})
export class DashbordItComponent implements OnInit {

  FinancierList : Financier[] =[]
  financierform!:FormGroup;

  constructor(private financierService : FinancierService,private formBuilder: FormBuilder,private authService : AuthService) { }

  ngOnInit(): void {

    if(localStorage.getItem('isloggedIn') === "false"|| localStorage.getItem('isloggedIn') ===null){
      this.authService.isauth="false"
      }else{
       
        this.authService.isauth=localStorage.getItem('isloggedIn')
      }
      
    

    this.financierform =this.formBuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      email : ['',Validators.email],
      psw:['',Validators.required],
      cfpsw:['',Validators.required],
      cin : ['',Validators.required],
      gender : ['',Validators.required],
      phone : ['',Validators.required],
    })
   
    this.financierService.getFinanciers().subscribe((financier:Financier[])=>{
      this.FinancierList=financier
      console.log(financier)
 
    })
      
  }
  onSubmit(){

    if( this.financierform.valid){
      // console.log(this.participantform.get('gender')?.value)
    
      const newFinancier:Financier={
         cin : this.financierform.value.cin,
         FirstName :this.financierform.value.FirstName,
         LastName :this.financierform.value.LastName,
         mail :this.financierform.value.email,
         psw :this.financierform.value.psw,
         Gender :this.financierform.value.gender,
         Phone :this.financierform.value.phone,
                
       }
     this.addFinancier(newFinancier)
     console.log(this.FinancierList)

     this.financierform.reset();
    }
    else {
    alert("not")
    }

  }

  addFinancier(financier:Financier){
    this.financierService.addFinancier(financier).subscribe((financier:any)=>(this.FinancierList.push(financier.user)))
   
  
   }

  checkPasswords() { // here we have the 'passwords' group
    const password = this.financierform.value.psw;
    const confirmPassword = this.financierform.value.cfpsw;
   
    return password === confirmPassword ? null : { notSame: true }
      
  }


}

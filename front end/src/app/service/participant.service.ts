import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Participant} from "../../participant"
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

private apiUrl = "http://localhost:3000/participant"
  constructor(private http: HttpClient) { }

   getParticipants():Observable<Participant[]> {
    console.log(this.http.get<Participant[]>(this.apiUrl))
    return this.http.get<Participant[]>(this.apiUrl);
  }
  // deleteParticipant(task:Task):Observable<Task>{
  //   const url=`${this.apiUrl}/${task.id}`
  //   return this.http.delete<Task>(url)
  // }

  addParticipant(participant:Participant):Observable<Participant>{
    console.log(participant)
    return this.http.post<Participant>(this.apiUrl,participant)}
 
   
   
    modifyParticipant(participant:Participant):Observable<Participant>{
    console.log("task",participant)
    // const body = { title: 'Angular PUT Request Example' };
    const url=`${this.apiUrl}/${participant.id}`
    return this.http.put<Participant>(url,participant)
        
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  appointment! :Appointment[];
  userDetails!: UserDetails[];
  
  constructor(private httpClient: HttpClient) { }

  
 
  addEnquiry(hero:any) {
    return this.httpClient.post<UserDetails[]>("https://localhost:44395/api/ContactUs",hero,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    })
  }



appointments():Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>("https://localhost:44395/api/Appointments/4",{
   headers:{
     "Access-Control-Allow-Origin":"*"
     
   }

  });
}
}

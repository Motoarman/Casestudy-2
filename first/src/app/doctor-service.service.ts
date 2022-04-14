
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

  
 
  addAppointments(patient:any) {
    console.log(patient)
    return this.httpClient.post<UserDetails[]>("https://localhost:44395/api/PatientDetails",patient,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    })
  }



appointments():Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>("https://localhost:44395/api/Appointments/4",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}

addEnquiry(hero:any) {
  console.log(hero)
  return this.httpClient.post<UserDetails[]>("https://localhost:44395/api/contactUs",hero,{
    headers:{
      "Access-Control-Allow-Origin":"*"
    }
  })
}

getEnquiry():Observable<UserDetails[]>{
  return this.httpClient.get<UserDetails[]>("https://localhost:44395/api/contactUs",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';
import { GetPatientDetails } from './get-patient-details';



@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  appointment! :Appointment[];
  userDetails!: UserDetails[];
  GetPatientDetails!:GetPatientDetails[];
  
  constructor(private httpClient: HttpClient) { }

  
 
addAppointments(patient:any) {
    console.log(patient)
    return this.httpClient.post("https://localhost:44303/api/PatientDetails",patient,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    })
  }



getappointmentsForDr1():Observable<GetPatientDetails[]>{
  return this.httpClient.get<GetPatientDetails[]>("https://localhost:44303/api/PatientDetails/1",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}

getappointmentsForDr2():Observable<GetPatientDetails[]>{
  return this.httpClient.get<GetPatientDetails[]>("https://localhost:44303/api/PatientDetails/2",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}

getappointmentsForDr3():Observable<GetPatientDetails[]>{
  return this.httpClient.get<GetPatientDetails[]>("https://localhost:44303/api/PatientDetails/3",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}

getappointmentsForDr4():Observable<GetPatientDetails[]>{
  return this.httpClient.get<GetPatientDetails[]>("https://localhost:44303/api/PatientDetails/4",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}

getappointmentsForDr5():Observable<GetPatientDetails[]>{
  return this.httpClient.get<GetPatientDetails[]>("https://localhost:44303/api/PatientDetails/5",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}



addEnquiry(hero:any) {
  console.log(hero)
  return this.httpClient.post("https://localhost:44303/api/contactUs",hero,{
    headers:{
      "Access-Control-Allow-Origin":"*"
    }
  })
}

getEnquiry():Observable<UserDetails[]>{
  return this.httpClient.get<UserDetails[]>("https://localhost:44303/api/ContactUs",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}
}

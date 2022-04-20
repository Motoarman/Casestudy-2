
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';
import { GetPatientDetails } from './get-patient-details';
import { HttpParamsOptions } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  appointment! :Appointment[];
  userDetails!: UserDetails[];
  GetPatientDetails!:GetPatientDetails[];
  Mainurl: string="https://localhost:44303/api/PatientDetails"; 
  Conurl:string="https://localhost:44303/api/contactUs";

  
  constructor(private httpClient: HttpClient) { }

  
 //post
addAppointments(patient:any) {
    console.log(patient)
    return this.httpClient.post("https://localhost:44303/api/PatientDetails",patient,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    })
  }


//get
getappointmentsForDr1(id :number):Observable<GetPatientDetails[]>{
  const url = `${this.Mainurl}/${id}`; // 
  return this.httpClient.get<GetPatientDetails[]>(url,
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}



//delete
deleteHero(id: number): Observable<unknown> {
  console.log(id);
  const url = `${this.Mainurl}/${id}`; 
  return this.httpClient.delete(url);
    
}


deleteEnquiry(id: number): Observable<unknown> {
  console.log(id);
  const url = `${this.Conurl}/${id}`;
  return this.httpClient.delete(url);
    
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
function httpOptions(url: string, httpOptions: any) {
  throw new Error('Function not implemented.');
}


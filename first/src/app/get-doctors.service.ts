import { Injectable,} from '@angular/core';
import { Doctors } from './doctors';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorsService {
Doctors!: Doctors[];
  constructor(private HttpClient : HttpClient) { }

  getDoctors():Observable<Doctors[]>{
    return this.HttpClient.get<Doctors[]>("https://localhost:44303/api/Doctors/1",
    {
     headers:{
       "Access-Control-Allow-Origin":"*"
     }
  
    });
  }
}

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
  Mainurl: string="https://localhost:44303/api/Doctors";

  getDoctors(id:number):Observable<Doctors[]>{
    const url = `${this.Mainurl}/${id}`;
    return this.HttpClient.get<Doctors[]>(url,
    {
     headers:{
       "Access-Control-Allow-Origin":"*"
     }
  
    });
  }
}

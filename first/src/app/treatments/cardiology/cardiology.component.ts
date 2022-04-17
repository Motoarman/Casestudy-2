import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/get-doctors.service';
import { Doctors } from 'src/app/doctors';

@Inject(GetDoctorsService)
@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.css']
})
export class CardiologyComponent implements OnInit {
  doctors!:Doctors[];
  CardiologistId =1;
  name!:string;
  constructor(private getDr : GetDoctorsService) { }

  ngOnInit(): void {
    this.getDr.getDoctors().subscribe(data=>{
     this.doctors=data;
     console.log(this.doctors);
     
    })
  }

  onBook(){
  
  }
  displayedColumns: string[] = [ 'Firstname'];
  showDiv = {
    enquiry: false,
  }

}

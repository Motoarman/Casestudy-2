import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/get-doctors.service';
import { Doctors } from 'src/app/doctors';
import { DoctorsSectionComponent } from 'src/app/navbarComponents/doctors-section/doctors-section.component';

@Inject(GetDoctorsService)
@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.css']
})
export class CardiologyComponent implements OnInit {
  doctors! : any
  CardiologistId =1;
  name!:string;
  constructor(private getDr : GetDoctorsService) { }

  ngOnInit(): void {

    this.getDr.getDoctors(this.CardiologistId).subscribe(data=>{
      this.doctors=data;
     this.doctors= Array.of(this.doctors); 
     
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

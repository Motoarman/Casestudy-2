import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/Services/get-doctors.service';



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

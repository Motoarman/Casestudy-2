import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/Services/get-doctors.service';

@Inject(GetDoctorsService)
@Component({
  selector: 'app-dentistry',
  templateUrl: './dentistry.component.html',
  styleUrls: ['./dentistry.component.css']
})
export class DentistryComponent implements OnInit {
  doctors! : any
  DentistId =3;
  name!:string;
  constructor(private getDr : GetDoctorsService) { }

  ngOnInit(): void {

    this.getDr.getDoctors(this.DentistId).subscribe(data=>{
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

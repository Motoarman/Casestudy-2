import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/get-doctors.service';



@Component({
  selector: 'app-neurology',
  templateUrl: './neurology.component.html',
  styleUrls: ['./neurology.component.css']
})
export class NeurologyComponent implements OnInit {
  doctors! : any
  NeurologistId =5;
  name!:string;
  constructor(private getDr : GetDoctorsService) { }

  ngOnInit(): void {

    this.getDr.getDoctors(this.NeurologistId).subscribe(data=>{
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

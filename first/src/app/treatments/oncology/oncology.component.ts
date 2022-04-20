import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/get-doctors.service';


@Inject(GetDoctorsService)
@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.component.html',
  styleUrls: ['./oncology.component.css']
})
export class OncologyComponent implements OnInit {
  doctors! : any
  OncologyId =2;
  constructor(private getDr : GetDoctorsService) { }


  ngOnInit(): void {

    this.getDr.getDoctors(this.OncologyId).subscribe(data=>{
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

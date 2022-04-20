import { Component,Inject, OnInit } from '@angular/core';
import { GetDoctorsService } from 'src/app/Services/get-doctors.service';

@Inject(GetDoctorsService)
@Component({
  selector: 'app-orthopaedics',
  templateUrl: './orthopaedics.component.html',
  styleUrls: ['./orthopaedics.component.css']
})
export class OrthopaedicsComponent implements OnInit {
  doctors! : any
  OrthopaedicsId =4;
  name!:string;
  constructor(private getDr : GetDoctorsService) { }

  ngOnInit(): void {

    this.getDr.getDoctors(this.OrthopaedicsId).subscribe(data=>{
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



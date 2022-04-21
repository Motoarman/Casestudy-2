import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { DoctorServiceService } from 'src/app/Services/doctor-service.service';
import { UserDetails } from '../Interfaces/user-details';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  UserDetails! :UserDetails[]
  constructor(private doctorServiceService: DoctorServiceService){

  }
   
 
  onSubmit(data:any)
  {

    //  this.doctorServiceService.submitUser(book).subscribe(data =>{
        
     // });

      this.doctorServiceService.addEnquiry(data).subscribe(result =>{
      });
      
      alert("Thanks for your response we will contact you soon")
      ;
  }

}

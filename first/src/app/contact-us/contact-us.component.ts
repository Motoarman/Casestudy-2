import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { UserDetails } from '../user-details';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  UserDetails! :UserDetails[]
  constructor(private doctorServiceService: DoctorServiceService){

  }
   
    contact = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required])

    
  })
 
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

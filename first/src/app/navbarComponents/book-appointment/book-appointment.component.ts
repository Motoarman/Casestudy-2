import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  book_appointment = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lastname:new FormControl('',[Validators.required]),
    phone_no : new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    medical_complaint: new FormControl('',[Validators.required]),
    selected_date: new FormControl('',[Validators.required]),
    selected_slot: new FormControl('',[Validators.required]),
    visiting_status: new FormControl('',[Validators.required])
})
onSubmit()
  {
    
      console.log(this.book_appointment.value),
      alert("Your appointment is booked")
      ;
  }

}

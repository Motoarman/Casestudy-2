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
    firstname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    phone_no : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    age: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(3),Validators.pattern("[0-9]*")]),
    gender: new FormControl('',[Validators.required]),
    selected_date: new FormControl('',[Validators.required]),
    selected_slot: new FormControl('',[Validators.required]),
    medical_complaint: new FormControl('',[Validators.required]),
    visiting_status: new FormControl('',[Validators.required])
})
onSubmit()
  {
    
      console.log(this.book_appointment.value),
      alert("Your appointment is booked")
      ;
  }

  get FirstName(): FormControl{
    return this.book_appointment.get("firstname") as FormControl;
  }
  get LastName(): FormControl{
    return this.book_appointment.get("lastname") as FormControl;
  }
  get PhoneNo(): FormControl{
    return this.book_appointment.get("phone_no") as FormControl;
  }
  get Email(): FormControl{
    return this.book_appointment.get("email") as FormControl;
  }
  get Age(): FormControl{
    return this.book_appointment.get("age") as FormControl;
  }
  get Gender(): FormControl{
    return this.book_appointment.get("gender") as FormControl;
  }
  get SelectedDate(): FormControl{
    return this.book_appointment.get("selected_date") as FormControl;
  }
  get SelectedSlot(): FormControl{
    return this.book_appointment.get("selected_slot") as FormControl;
  }
  get MedicalComplaint(): FormControl{
    return this.book_appointment.get("medical_complaint") as FormControl;
  }
  get VisitingStatus(): FormControl{
    return this.book_appointment.get("visiting_status") as FormControl;
  }

}

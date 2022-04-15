import { Component,Inject ,Input,OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { PatientDetails } from 'src/app/patient-details';

@Inject(DoctorServiceService)
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  PatientDetails! :PatientDetails[];
  @Input() doctorId!:number;
  constructor(private DoctorServiceService: DoctorServiceService) { }

 
  

  ngOnInit(): void {
  }

  book_appointment = new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    LastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    PhoneNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    EmailId:new FormControl('',[Validators.required,Validators.email]),
    Age: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(3),Validators.pattern("[0-9]*")]),
    Gender: new FormControl('',[Validators.required]),
    SelectedDate: new FormControl('',[Validators.required]),
    SelectedSlot: new FormControl('',[Validators.required]),
    MedicalComplaint: new FormControl('',[Validators.required]),
    VisitingStatus: new FormControl('',[Validators.required])
})


onSubmit()
  {
    
    let newP:PatientDetails= {
      doctorId: this.doctorId,
      FirstName: this.book_appointment.value.FirstName,
      LastName: this.book_appointment.value.LastName,
      PhoneNo: this.book_appointment.value.PhoneNo,
      EmailId: this.book_appointment.value.EmailId,
      Age: this.book_appointment.value.Age,
      Gender: this.book_appointment.value.Gender,
      MedicalComplaint: this.book_appointment.value.MedicalComplaint,
      SelectedDate:this.book_appointment.value.SelectedDate ,
      SelectedSlot: this.book_appointment.value.SelectedSlot,
      VisitingStatus: this.book_appointment.value.VisitingStatus
    };
    
    
    this.DoctorServiceService.addAppointments(newP).subscribe(data=>{

    }) 
      console.log(this.PatientDetails)
      alert("Your appointment is booked")
      ;
  }

  get FirstName(): FormControl{
    return this.book_appointment.get("FirstName") as FormControl;
  }
  get LastName(): FormControl{
    return this.book_appointment.get("LastName") as FormControl;
  }
  get PhoneNo(): FormControl{
    return this.book_appointment.get("PhoneNo") as FormControl;
  }
  get EmailId(): FormControl{
    return this.book_appointment.get("EmailId") as FormControl;
  }
  get Age(): FormControl{
    return this.book_appointment.get("Age") as FormControl;
  }
  get Gender(): FormControl{
    return this.book_appointment.get("Gender") as FormControl;
  }
  get SelectedDate(): FormControl{
    return this.book_appointment.get("SelectedDate") as FormControl;
  }
  get SelectedSlot(): FormControl{
    return this.book_appointment.get("SelectedSlot") as FormControl;
  }
  get MedicalComplaint(): FormControl{
    return this.book_appointment.get("MedicalComplaint") as FormControl;
  }
  get VisitingStatus(): FormControl{
    return this.book_appointment.get("VisitingStatus") as FormControl;
  }

  
}

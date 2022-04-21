import { Component,Inject ,OnInit } from '@angular/core';;
import { DoctorServiceService } from 'src/app/Services/doctor-service.service';
import { UserDetails } from 'src/app/Interfaces/user-details';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { GetDoctorsService } from 'src/app/Services/get-doctors.service';
import { DoctorDetails } from 'src/app/doctor-details';


@Inject(DoctorServiceService)
@Inject(GetDoctorsService)
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  userdetails!:UserDetails[];
  DoctorDetails!:DoctorDetails[];
  constructor(private DoctorServiceService :DoctorServiceService, private GetDoctorService : GetDoctorsService) { }
  
  ngOnInit(): void {
    
    
  }
  onEnquiry(){
    this.DoctorServiceService.getEnquiry().subscribe(data=>{
      console.log(this.userdetails);
      this.userdetails = data;
      
  });

}

deleteEnquiry(rowid: number) {
  // this.GetPatientDetails = this.GetPatientDetails.filter((item, index) => index !== rowid);
     console.log(rowid);
     this.DoctorServiceService.deleteEnquiry(rowid).subscribe(data=>{
      window.location.reload();
   })
  }

displayedColumns: string[] = [  'Firstname', 'Lastname', 'EmailId', 'PComment','Action'];
   
showDiv = {
  enquiry: false,
  current : false,
  next : false
}



Doctors = new FormGroup({
  FirstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
  LastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
  PhoneNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
  EmailId:new FormControl('',[Validators.required,Validators.email]),
  SpecializationId: new FormControl('',[Validators.required]),
  Photo: new FormControl('',[Validators.required])
  
})
onSubmit(Doctors: any)
{
  
  Doctors= this.DoctorDetails;
  console.log(Doctors);
    this.GetDoctorService.addDoctors(Doctors).subscribe(data =>{

    });
    alert("Doctors is assigned")
    ;
}

get FirstName(): FormControl{
  return this.Doctors.get("FirstName") as FormControl;
}
get LastName(): FormControl{
  return this.Doctors.get("LastName") as FormControl;
}
get PhoneNo(): FormControl{
  return this.Doctors.get("PhoneNo") as FormControl;
}
get EmailId(): FormControl{
  return this.Doctors.get("EmailId") as FormControl;
}

get SpecializationId(): FormControl{
  return this.Doctors.get("SpecializationId") as FormControl;
}

get Image(): FormControl{
  return this.Doctors.get("Photo") as FormControl;
}


}
  





  

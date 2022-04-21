import { Component,Inject ,OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/Services/doctor-service.service';
import { GetPatientDetails } from 'src/app/Interfaces/get-patient-details';


@Inject(DoctorServiceService)
@Component({
  selector: 'app-doctors-section',
  templateUrl: './doctors-section.component.html',
  styleUrls: ['./doctors-section.component.css']
})
export class DoctorsSectionComponent implements OnInit {
   GetPatientDetails!: GetPatientDetails[];
   
  constructor(private DoctorServiceService:DoctorServiceService) { }
  
  ngOnInit(): void {
    
  }
  Onclick1(num:number){
    this.DoctorServiceService.getappointmentsForDr1(num).subscribe(data=>{
           this.GetPatientDetails=data;
          
    })
    
  }

 

  deleteTicket(rowid: number) {
  // this.GetPatientDetails = this.GetPatientDetails.filter((item, index) => index !== rowid);
     console.log(rowid);
     this.DoctorServiceService.deleteHero(rowid).subscribe(data=>{
      window.location.reload();
   })
  }
  

  displayedColumns: string[] = [  'Firstname', 'Lastname', 'EmailId', 'PhoneNo','Age','Gender','MedicalComplaint','SelectedDate','SelectedSlot','DoctorId','VisitingStatus','Action'];
  

  
    }



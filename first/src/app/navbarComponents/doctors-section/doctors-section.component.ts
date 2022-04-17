import { Component,Inject ,OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { GetPatientDetails } from 'src/app/get-patient-details';


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
  Onclick1(){
    this.DoctorServiceService.getappointmentsForDr1().subscribe(data=>{
          
           this.GetPatientDetails=data;
    })
    
  }

  Onclick2(){
    this.DoctorServiceService.getappointmentsForDr2().subscribe(data=>{
          
           this.GetPatientDetails=data;
    })

  }
  
  Onclick3(){
    this.DoctorServiceService.getappointmentsForDr3().subscribe(data=>{
          
           this.GetPatientDetails=data;
    })
    
  }

  Onclick4(){
    this.DoctorServiceService.getappointmentsForDr4().subscribe(data=>{
           this.GetPatientDetails=data;
    })
    
  }

  Onclick5(){
    this.DoctorServiceService.getappointmentsForDr5().subscribe(data=>{

           this.GetPatientDetails=data;
    })
   
  }
  

  displayedColumns: string[] = [  'Firstname', 'Lastname', 'EmailId', 'PhoneNo','Age','Gender','MedicalComplaint','SelectedDate','SelectedSlot','DoctorId','VisitingStatus'];
  showDiv = {
    dr1: false,
    dr2 : false,
    dr3 : false,
    dr4 : false,
    dr5 : false

  }

  
    }



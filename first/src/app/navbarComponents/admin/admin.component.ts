import { Component,Inject ,OnInit } from '@angular/core';;
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { UserDetails } from 'src/app/user-details';


@Inject(DoctorServiceService)
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  userdetails!:UserDetails[];
  
  constructor(private DoctorServiceService :DoctorServiceService) { }
  
  ngOnInit(): void {
    
    
  }
  onEnquiry(){
    this.DoctorServiceService.getEnquiry().subscribe(data=>{
      this.userdetails = data;
      
  });

}

displayedColumns: string[] = [  'Firstname', 'Lastname', 'EmailId', 'PComment'];
   
showDiv = {
  enquiry: false,
  current : false,
  next : false
}

}
  





  

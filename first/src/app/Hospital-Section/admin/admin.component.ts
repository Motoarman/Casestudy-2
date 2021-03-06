import { Component,Inject ,OnInit } from '@angular/core';;
import { DoctorServiceService } from 'src/app/Services/doctor-service.service';
import { UserDetails } from 'src/app/Interfaces/user-details';


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
      console.log(this.userdetails);
      this.userdetails = data;
      
  });

}

deleteEnquiry(rowid: number,eindex:number) {
  
     console.log(rowid,eindex);
   
       this.userdetails = this.userdetails.filter((item, index) => index !== eindex);
      this.DoctorServiceService.deleteEnquiry(rowid).subscribe(data=>{

      //window.location.reload();
   })
  }

displayedColumns: string[] = [  'Firstname', 'Lastname', 'EmailId', 'PComment','Action'];
   
showDiv = {
  enquiry: false,
  current : false,
  
}

}
  





  

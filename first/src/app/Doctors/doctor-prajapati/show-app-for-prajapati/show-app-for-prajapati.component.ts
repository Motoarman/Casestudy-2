import { Component,Inject,OnInit} from '@angular/core';
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { Appointment } from 'src/app/appointment';


@Inject(DoctorServiceService)
@Component({
  selector: 'app-show-app-for-prajapati',
  templateUrl: './show-app-for-prajapati.component.html',
  styleUrls: ['./show-app-for-prajapati.component.css']
})


export class ShowAppForPrajapatiComponent implements OnInit {
   
  appointment!: Appointment[];
  constructor(public DoctorServiceService :DoctorServiceService) { }
  ngOnInit(): void {

    this.DoctorServiceService.appointments().subscribe(data=>{
      this.appointment = data;
  })

}
}

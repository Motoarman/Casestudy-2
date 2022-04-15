import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.css']
})
export class CardiologyComponent  {
  CardiologistId =1;
  constructor() { }

  

  onBook(){

  }

  showDiv = {
    enquiry: false,
  }

}

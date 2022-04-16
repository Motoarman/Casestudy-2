import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neurology',
  templateUrl: './neurology.component.html',
  styleUrls: ['./neurology.component.css']
})
export class NeurologyComponent implements OnInit {
  CardiologistId =5;
  constructor() { }

  ngOnInit(): void {
  }
  showDiv = {
    enquiry: false,
  }

}

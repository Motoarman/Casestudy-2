import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.component.html',
  styleUrls: ['./oncology.component.css']
})
export class OncologyComponent implements OnInit {
  CardiologistId =2;
  constructor() { }

  ngOnInit(): void {
  }
  showDiv = {
    enquiry: false,
    current : false,
    next : false
  }
}

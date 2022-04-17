import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orthopaedics',
  templateUrl: './orthopaedics.component.html',
  styleUrls: ['./orthopaedics.component.css']
})
export class OrthopaedicsComponent implements OnInit {
  CardiologistId =4;
  constructor() { }

  ngOnInit(): void {
  }

  showDiv = {
    enquiry: false,
  }
}

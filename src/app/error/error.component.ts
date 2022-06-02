import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Some error has occured. Please contact the support ***-***'
  constructor() { }

  ngOnInit(): void {
  }

}

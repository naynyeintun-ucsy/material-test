import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2021,4,21);
 
  constructor() { }

  ngOnInit(): void {
  }

}

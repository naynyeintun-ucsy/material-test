import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  index: number = 0;

  ngOnInit(): void {
  }

  logChange(index :any){
    console.log("selected index ==>", index);
    this.index=index;
  }


}

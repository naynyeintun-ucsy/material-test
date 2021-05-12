import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  openDialog(input : string){
    let diaRef = this.dialog.open(DialogExampleComponent, {data : {name:'Nay Nyein Tun'}})
    diaRef.afterClosed().subscribe(result =>{
      console.log(`dialog result is ${result}`)
    })
  }

  ngOnInit(): void {
  }

}

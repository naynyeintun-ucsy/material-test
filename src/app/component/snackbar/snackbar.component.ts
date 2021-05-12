import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar : MatSnackBar) { }

  openSnackBar(input : string , action : string ){
    let snackBarRef = this.snackBar.open(input,action,{duration:2000});

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log("snack bar was dismissed")
    })

    snackBarRef.onAction().subscribe(()=>{
      console.log("snack bar action is trigger")
    })
  }

  


  ngOnInit(): void {
  }

}

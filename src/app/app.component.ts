import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  noti = 23;
  showSpinner= false;
  opened= false;

  log(state : string ){
    console.log(state)
  }

  loadData(){
    this.showSpinner=true;
    setTimeout(() =>{
      this.showSpinner =false;

    }, 5000)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import {Observable} from 'rxjs'
import {map,startWith} from 'rxjs/operators'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  options : String [] = ['Anuglar' , 'Vue' , 'React']
  filterOptions : Observable<String[]>;
  msterOptions: Observable<any>;
  selectedObject : string ;
  myControl = new FormControl();

  objectOptions = [
    { name : 'Anuglar', address : 'yangon'  }
    ,
    {name : 'React' , address : 'mandalay'  }
    ,
    { name: 'React Native' , adress : 'bago'  },
    {name : 'Anuglar Material' , address : 'pyin oo lwin' },
    { name : 'Android' , address : 'may myo'  },
    {   name : 'java' , address : 'tan taung gyi' },
    {  name : 'Vue' , address : 'taung gyi'},
    { name : 'java script' , address : 'Dwei' }
  
  ]


  constructor() { }

  ngOnInit(): void {
    this.msterOptions = this.myControl.valueChanges.pipe(startWith(''), map(value=>this._materFilter(value)))
  }

  displayFun(subject : any){
    return  subject? subject.name : undefined;
  }

  private _materFilter(iv : String) {
    return this.objectOptions.filter(value=> value.name.toLowerCase().includes(iv.toString().toLowerCase()))
  }





}

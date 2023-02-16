import { StatesHomeService } from './states-home.service';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { State } from '../models/model';
import { state } from '@angular/animations';

const URL = 'http://localhost:8080/api/states';

@Component({
  selector: 'app-states-home',
  templateUrl: './states-home.component.html',
  styleUrls: ['./states-home.component.scss']
})
export class StatesHomeComponent implements OnInit, AfterViewInit {
  states: State[];
  selectedState: State;

  constructor(private service: StatesHomeService){}


  ngOnInit(){
    this.handleLoadStates();
  }

  onStateSelected(state: State){

  }

  ngAfterViewInit(): void {

  }

  handleLoadStates(){
    this.service.loadStates(URL).subscribe({
      next: (data) => {this.states = data},
      error: (err) => {console.log(err);
      }
    })
  }  
}

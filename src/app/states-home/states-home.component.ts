import { StatesHomeService } from './states-home.service';

import { Component, OnInit } from '@angular/core';
import { State } from '../model';

const URL = 'http://localhost:8080/api/states';

@Component({
  selector: 'app-states-home',
  templateUrl: './states-home.component.html',
  styleUrls: ['./states-home.component.scss']
})
export class StatesHomeComponent implements OnInit {
  states: State[];
  selectedItem: State;

  constructor(private service: StatesHomeService){}

  ngOnInit(){
    this.handleLoadStates();
  }

  showDetails(state: State){
    this.selectedItem = state;
  }

  handleLoadStates(){
    this.service.loadStates(URL).subscribe({
      next: (data) => {this.states = data},
      error: (err) => {console.log(err);
      }
    })
  }  
}

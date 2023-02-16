import { Router } from '@angular/router';
import { StatesHomeService } from './../states-home/states-home.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { State } from '../models/model';

@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.scss']
})
export class StateCardComponent {

  @Input() state: State;

  constructor(private service: StatesHomeService, private router: Router){

  }

  onSelected(){
    this.router.navigateByUrl('/state/'+this.state.admissionNumber);
  }
}

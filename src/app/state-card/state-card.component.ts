import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { State } from '../model';

@Component({
  selector: 'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls: ['./state-card.component.scss']
})
export class StateCardComponent {

  state: State;

  @Input() flagImageUrl: string;
  @Input() sealImageUrl: string;
  @Input() mapImageUrl: string;
  @Input() imageAlt: string;
  @Input() cardTitle: string;
  @Input() cardText: string;
  @Input() goToUrl: string;
  @Input() goToText: string;
  @Input() carouselId: string;
  @Input() selectedItem: State;

  constructor(/* private http: HttpClient */){

/*     this.http.get<State>('http://localhost:8080/api/states/id/1').subscribe(data => {
      this.state = data;
      console.log(this.state);
      this.flagImageUrl = this.state.stateFlagUrl;
      this.sealImageUrl = this.state.stateSealUrl;
      this.mapImageUrl = this.state.mapIamgeUrl;
      this.imageAlt = this.state.name;
      this.cardTitle = this.state.name;
      this.cardText = this.state.nickname+', '+this.state.code;

    });
    
    
    this.goToUrl = "https://www.google.com/";
    this.goToText = 'Show Details'; */
  }
  
  goToDetails(e){
    console.log(e);
  }

}

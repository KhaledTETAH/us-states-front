import { state } from '@angular/animations';
import { City } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { switchMap, Observable } from 'rxjs';
import { State } from '../models/model';
import { StatesHomeService } from './../states-home/states-home.service';
import { AfterViewInit, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const URL1 = 'http://localhost:8080/api/states/cities/id/';
const URL2 = 'http://localhost:8080/api/states/id/';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.scss']
})
export class StateDetailsComponent implements OnInit {

  selectedState: State;
  cities: City[];
  focusedRowKey: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.http.get<State>(URL2+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      (state: State) => {this.selectedState = state}
    )

    this.http.get<City[]>(URL1+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      (data : City[]) => {this.cities = data}
    )
  }
  
}

@Pipe({name: 'formatNumberPipe'})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number) {
    let str = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    str.toString().replace('.', ',');
    return str;
  }  
  
}
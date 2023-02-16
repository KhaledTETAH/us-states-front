import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { State } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class StatesHomeService {

  selectedState = new BehaviorSubject<State>(null);

  constructor(private http: HttpClient) { }

  loadStates(url: string): Observable<State[]>{
    return this.http.get<State[]>(url);
  }

  getSelectedState(){
    return this.selectedState.asObservable();
  }

  setSelectedState(state: State){
    console.log(state)
    this.selectedState.next(state);
  }
}

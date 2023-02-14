import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StatesHomeService {

  constructor(private http: HttpClient) { }

  loadStates(url: string): Observable<State[]>{
    return this.http.get<State[]>(url);
  }
}

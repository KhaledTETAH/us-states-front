import { HttpClient } from '@angular/common/http';
import { City } from '../model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityDatagridService {

  constructor(private http: HttpClient) { }

  loadData(url: string):Observable<City[]> {
    return this.http.get<City[]>(url);
  }
}

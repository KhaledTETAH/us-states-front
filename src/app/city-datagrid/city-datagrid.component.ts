import { CityDatagridService } from './city-datagrid.service';
import { City } from '../model';
import { Component, OnInit } from '@angular/core';


const URL = 'http://localhost:8080/api/cities/all';

@Component({
  selector: 'app-city-datagrid',
  templateUrl: './city-datagrid.component.html',
  styleUrls: ['./city-datagrid.component.scss']
})
export class CityDatagridComponent implements OnInit{

  cities: City[] = [];

  constructor(private service: CityDatagridService) {
    
  }

  ngOnInit() {
    this.handleLoadData();
    console.log(this.cities);
  }

  handleLoadData(){
    this.service.loadData(URL).subscribe(data => {
      this.cities = data
    },
    err => {
      console.log(err);
    })
  }
}

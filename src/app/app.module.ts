import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxCheckBoxModule, DxDataGridModule, DxFileManagerModule } from 'devextreme-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { CityDatagridComponent } from './city-datagrid/city-datagrid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CityDatagridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxFileManagerModule,
    DxDataGridModule,
    DxCheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

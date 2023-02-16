import { StateDetailsComponent } from './state-details/state-details.component';
import { StatesHomeComponent } from './states-home/states-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: StatesHomeComponent},
  {path: 'state/:id', component: StateDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from '../home-view/home-view.component';
import { AddEventComponent } from '../add-event/add-event.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'add-event', component: AddEventComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

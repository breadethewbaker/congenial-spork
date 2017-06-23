import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EventService } from './event.service';
import { HomeViewComponent } from './home-view/home-view.component';
import { AddEventComponent } from './add-event/add-event.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EventDisplayComponent,
    SearchBarComponent,
    HomeViewComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }

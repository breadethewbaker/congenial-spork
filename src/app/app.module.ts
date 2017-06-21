import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EventService } from './event.service';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDisplayComponent,
    SearchBarComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit} from '@angular/core';

import { EventService } from './event.service';
import { Event } from './event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'app';
  events: Event[];

  constructor() {}

  ngOnInit() {}

}

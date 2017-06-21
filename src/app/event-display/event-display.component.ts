import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css'],
})
export class EventDisplayComponent implements OnInit {

  eventLists: Event[][];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getPopEvents()
      .then(events => this.eventLists = events);
  }

}

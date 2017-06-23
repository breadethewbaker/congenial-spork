import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';
import { SearchQuery } from '../search-query';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css'],
})
export class EventDisplayComponent implements OnInit {

  @Input() query: SearchQuery;
  eventLists: Event[][];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getPopEvents()
      .then(events => this.eventLists = events);
  }

}

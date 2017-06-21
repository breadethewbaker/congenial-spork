import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';
import { SearchQuery } from '../search-query';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() queryEmitter = new EventEmitter<string>();
  query: SearchQuery;

  constructor(private eventService: EventService) {
    this.query = {search: ''};
  }

  ngOnInit() {}

  sendQuery(search: string) {
    this.queryEmitter.emit(search);
  }

}

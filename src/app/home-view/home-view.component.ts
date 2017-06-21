import { Component, OnInit } from '@angular/core';

import { SearchQuery } from '../search-query';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  query: SearchQuery;

  constructor() {
    this.query = { search: '' }
  }

  ngOnInit() {}

  sendQuery(search: string) {
    this.query.search = search;
  }

}

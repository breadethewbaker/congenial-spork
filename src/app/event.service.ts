import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Event } from './event';

@Injectable()
export class EventService {

  private eventsUrl = 'api/events';
  private popEventsUrl = 'api/popEvents';
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor( private http: Http ) {}

  create(name: string): Promise<Event> {
    return this.http
      .post(this.eventsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Event)
      .catch(this.handleError);
  }

  getEvents(): Promise<Event[]> {
    return this.http
      .get(this.eventsUrl)
      .toPromise()
      .then(response => response.json().data as Event[])
      .catch(this.handleError);
  }

  getPopEvents(): Promise<Event[][]> {
    return Promise.resolve(POPEVENTS);
  }
}

export const EVENTS: Event[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];
export const POPEVENTS: Event[][] = [
  [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
  ],
  [
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
  ],
  [
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'}
  ]
];

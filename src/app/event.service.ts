import { Injectable } from '@angular/core';

import { Event } from './event';

@Injectable()
export class EventService {

  constructor() {}

  getPopEvents(): Promise<Event[][]> {
    return Promise.resolve(POPEVENTS);
  }
  queryEvents(str: string): Promise<Event[]> {
    var retVal:Event[];
    for (var i=0;i<EVENTS.length;i++) {
      if (EVENTS[i].name.includes(str)) {
        retVal.push(EVENTS[i]);
      }
    }
    return Promise.resolve(retVal);
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

import { Injectable } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  listeners;
  eventsSubject;
  events

  constructor() {
    this.listeners = {};
    this.eventsSubject = new Subject();

    this.events = from(this.eventsSubject);

    this.events.subscribe(
      ({name, args}) => {
        if(this.listeners[name]) {
          for(let listener of this.listeners[name]) {
            listener(...args);
          }
        }
      }
    );
  }

  on(name, listener) {
    if(!this.listeners[name]) {
      this.listeners[name] = [];
    }

    this.listeners[name].push(listener);
  }

  broadcast(name, ...args) {
    this.eventsSubject.next({
      name,
      args
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the CalendarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalendarProvider {

  url: string = '';
  eventsData: Observable<Object>;

  constructor(public http: HttpClient) {
    console.log('Hello CalendarProvider Provider');
    this.url = 'http://pruebaaaa-alessandromx907746.codeanyapp.com:8000/calendar';
  }

  getEvents() {
    return this.http.get(this.url);
  }

  getEventsData(): Observable<Object> {
    return this.eventsData;
  }

}

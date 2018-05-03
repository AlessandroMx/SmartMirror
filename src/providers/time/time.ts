import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TimeProvider {

  private clock: Observable<Date>;

  constructor(public http: HttpClient) {
    // console.log('Hello TimeProvider Provider');
    this.clock = Observable.interval(1000).map(tick => new Date()).share();
  }

  getClock(): Observable<Date> {
    return this.clock;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {
  
  apiKey = '6d61200bf27ab3c2';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city, state) {
    // return this.http.get(this.url + '/' + state + '/' + city + '.json');
    return this.http.get(this.url+'/zmw:00000.45.76005.json');
  }

}

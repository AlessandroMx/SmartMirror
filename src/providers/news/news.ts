import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsProvider {

  apiKey = '37529e47c8e84f1e86b4d9ebf93505e5';
  url: string;
  country: string = 'mx';
  news: any;
  newsData: Observable<Object>;

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
    this.url = 'https://newsapi.org/v2/top-headlines?' + 'country=' +
      this.country + '&apiKey=' + this.apiKey;
  }

  getNews() {
    return this.http.get(this.url);
  }

  getNewsData(): Observable<Object> {
    return this.newsData;
  }

}

class NewsData {

  public constructor() {

  }

}
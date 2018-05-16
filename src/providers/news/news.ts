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
    // this.news = Observable.interval(10*1000).map(tick => this.getNews()).share();
    // this.news = this.getNews();
    /* console.log(this.news);
    let i = 0;
    this.newsData = Observable.interval(10*1000).map(tick => {
      let tmpObj = {
        source: 'Cargando...',
        title : 'Cargando...',
        description : 'Cargando...'
      }
      if (this.news['status'] == 'ok') {
        tmpObj.source = this.news['articles'][i]['source']['name'];
        tmpObj.title = this.news['articles'][i]['title'];
        tmpObj.description = this.news['articles'][i]['description'];
        i++;
      }
      return tmpObj;
    }).share(); */
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
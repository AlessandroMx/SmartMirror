import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {

  news: any;
  source: string;
  title: string;
  description: string;
  newsData: any;
  currentNews: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsProvider: NewsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedPage');
    this.newsProvider.getNews().subscribe(news => {
      if (news['status'] == 'ok') {
        this.newsData = news['articles'];
      }
    });

    let newsObservable = Observable
      .interval(10 * 1000)
      .timeInterval();

    newsObservable.subscribe(x => {
      try {
        this.source = this.newsData[this.currentNews]['source']['name'];
        this.title = this.newsData[this.currentNews]['title'];
        this.description = this.newsData[this.currentNews]['description'];
        this.currentNews += this.currentNews <= 18 ? 1 : -20;
      } catch (e) {
        console.log(e);
        this.source = '';
        this.title = '';
        this.description = '';
        this.currentNews += this.currentNews <= 18 ? 1 : -20;
      }
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {

  news : any;
  source: string;
  title: string;
  description: string;
  newsData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsProvider: NewsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedPage');
    this.newsProvider.getNews().subscribe(news => {
      console.log(news);
      if (news['status'] == 'ok') {
        let news_articles = news['articles'];
        this.source = news_articles[0]['source']['name'];
        this.title = news_articles[0]['title'];
        this.description = news_articles[0]['description'];
      }
    });
    /* this.newsProvider.getNewsData().subscribe(newsData => {
      this.newsData = newsData;
      this.source = this.newsData.source;
      this.title = this.newsData.title;
      this.description = this.newsData.description;
    }); */
  }

}

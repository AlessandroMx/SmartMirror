import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { CalendarProvider } from '../../providers/calendar/calendar';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  news: any;
  source: string;
  title: string;
  description: string;
  eventsData: any;
  currentNews: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendarProvider: CalendarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.calendarProvider.getEvents().subscribe(events => {
      this.eventsData = events;
    });

    let newsObservable = Observable
      .interval(10 * 1000)
      .timeInterval();

    newsObservable.subscribe(x => {
      try {
        this.title = this.eventsData[String(this.currentNews)][0];
        this.description = this.eventsData[String(this.currentNews)][1];
        this.currentNews += this.currentNews <= 5 ? 1 : -5;
      } catch (e) {
        console.log(e);
        this.title = '';
        this.description = '';
        this.currentNews += this.currentNews <= 5 ? 1 : -20;
      }
    });
  }

}

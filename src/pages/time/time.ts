import { TimeProvider } from './../../providers/time/time';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {
  
  time: Date; //= new Date();
  hour: any; // = this.time.getHours();
  minute: any; // = this.time.getMinutes();
  second: any; // = this.time.getSeconds();

  constructor(public navCtrl: NavController, public navParams: NavParams, private timeProvider: TimeProvider) {
  }

  ionViewDidLoad() {
    this.timeProvider.getClock().subscribe(time => {
      this.time = time
      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      let tmpSecond: any = this.time.getSeconds();
      this.second = tmpSecond < 10 ? '0' + tmpSecond : tmpSecond;
    });
  }

}

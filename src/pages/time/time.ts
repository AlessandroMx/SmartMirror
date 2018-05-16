import { TimeProvider } from './../../providers/time/time';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {
  
  time: Date;
  hour: any;
  minute: any; 
  second: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private timeProvider: TimeProvider) {
  }

  ionViewDidLoad() {
    this.timeProvider.getClock().subscribe(time => {
      this.time = time
      let tmpSecond: any = this.time.getSeconds();
      let tmpMinute: any = this.time.getMinutes();
      let tmpHour : any = this.time.getHours();
      this.hour = tmpHour < 10 ? '0' + tmpHour : tmpHour;
      this.minute = tmpMinute < 10 ? '0' + tmpMinute : tmpMinute;
      this.second = tmpSecond < 10 ? '0' + tmpSecond : tmpSecond;
    });
  }

}

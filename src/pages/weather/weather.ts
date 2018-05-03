import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  weather: any;
  location: {
    city: string,
    state: string
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewDidLoad() {
    this.location = {
      city: 'queretaro',
      state: 'mx'
    }
    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {
      console.log(weather);
      this.weather = weather.current_observation;
    });
  }

}

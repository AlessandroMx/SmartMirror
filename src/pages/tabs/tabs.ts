import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { WeatherPage } from './../weather/weather';
import { HomePage } from '../home/home';
import { TimePage } from '../time/time';
import { SettingsPage } from './../settings/settings';
import { NewsfeedPage } from '../newsfeed/newsfeed';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimePage;
  tab2Root = WeatherPage;
  tab3Root = NewsfeedPage;
  tab4Root = AboutPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { WeatherPage } from './../weather/weather';
import { TimePage } from '../time/time';
import { SettingsPage } from './../settings/settings';
import { NewsfeedPage } from '../newsfeed/newsfeed';
import { CalendarPage } from './../calendar/calendar';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimePage;
  tab2Root = WeatherPage;
  tab3Root = NewsfeedPage;
  tab4Root = CalendarPage;
  tab5Root = AboutPage;
  tab6Root = SettingsPage;

  constructor() {

  }
}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { TimePage } from '../time/time';
import { SettingsPage } from './../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimePage;
  tab3Root = AboutPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}

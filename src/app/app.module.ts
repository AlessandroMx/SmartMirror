import { CalendarComponent } from './../components/calendar/calendar';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { TimePage } from '../pages/time/time';
import { NewsfeedPage } from './../pages/newsfeed/newsfeed';
import { WeatherPage } from './../pages/weather/weather';
import { CalendarPage } from './../pages/calendar/calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { TimeProvider } from '../providers/time/time';
import { NewsProvider } from '../providers/news/news';
import { CalendarProvider } from '../providers/calendar/calendar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    SettingsPage,
    TimePage,
    NewsfeedPage,
    WeatherPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    SettingsPage,
    TimePage,
    NewsfeedPage,
    WeatherPage,
    CalendarPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    TimeProvider,
    NewsProvider,
    CalendarProvider
  ]
})
export class AppModule {}

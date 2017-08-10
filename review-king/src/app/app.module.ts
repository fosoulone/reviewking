import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'; 


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Reviews } from '../providers/reviews/reviews';
import { AddReviewPage } from '../pages/add-review/add-review';
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReviewPage,
    Welcome,
    Login,
    Signup
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReviewPage,
    Welcome,
    Login,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Reviews
  ]
})
export class AppModule {}

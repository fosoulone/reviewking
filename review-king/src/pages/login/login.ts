import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
  
  login(){
    // Your app login API web service call triggers 
    this.navCtrl.push(HomePage, {}, {animate: false});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  close(): void {
    this.viewCtrl.dismiss();
  }


}
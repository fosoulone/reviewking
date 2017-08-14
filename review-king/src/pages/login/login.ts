import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


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
  
  username: any;
  password: any;
  mode: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
  
  login():void{
    // Your app login API web service call triggers 
    let log = {
	username: this.username,
	password: this.password,
	mode: 0
    };
    this.viewCtrl.dismiss(log);
  }

  
  close(): void {
    this.viewCtrl.dismiss();
  }


}

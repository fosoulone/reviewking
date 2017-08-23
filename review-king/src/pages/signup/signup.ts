import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  
  username: any;
  password: any;
  mode: any;
  admin: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  register(): void {

	let registro = {
	  username: this.username,
	  password: this.password,
	  mode: 1,
	  admin:0
	};

	this.viewCtrl.dismiss(registro);

  }


   close(): void {
    this.viewCtrl.dismiss();
  }


}

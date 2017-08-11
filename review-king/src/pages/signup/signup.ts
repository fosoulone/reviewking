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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  register(): void {

	let registro = {
	  username: this.username,
	  password: this.password
	};

	this.viewCtrl.dismiss(registro);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


}

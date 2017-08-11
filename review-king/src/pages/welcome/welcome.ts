import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  login(){
	this.navCtrl.push(HomePage);
       
  }

  signup(){
  	let modal = this.modalCtrl.create(Signup);
	modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { Users } from '../../providers/users/users';
import { AlertController } from 'ionic-angular';
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

  users: any;
  
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public userService: Users) {
  }
alertFail(){
  let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'El usuario ya existe.',
      buttons: ['Ok']
    });

    alert.present();
}

alertSuccess(){
  let alert = this.alertCtrl.create({
      title: 'Enhorabuena!',
      subTitle: 'Tu usuario ha sido creado correctamente',
      buttons: ['Ok']
    });

    alert.present();
}

alertFailLogin(){
  let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Usuario o password erroneos',
      buttons: ['Ok']
    });

    alert.present();
}

alertSuccessLogin(){
  let alert = this.alertCtrl.create({
      title: 'Enhorabuena!',
      subTitle: 'Has iniciado sesión correctamente',
      buttons: ['Ok']
    });

    alert.present();
}


  login(){
	/*this.navCtrl.push(HomePage);*/
	let modal = this.modalCtrl.create(Login);
        modal.onDidDismiss(user => {
                if(user){
               
                        this.userService.loginUser(user).subscribe(data => {
                                
				this.users=data;
                                if(this.users.status == -1){
                                        this.alertFailLogin();
                                }
                                else{
                                        this.alertSuccessLogin();
					this.navCtrl.push(HomePage,{username: user.username});
                                }
                        });
                }

        });

        modal.present();

  }

  signup(){
  	let modal = this.modalCtrl.create(Signup);
	modal.onDidDismiss(user => {
		if(user){
		/*	this.users.push(user);*/
			this.userService.createUser(user).subscribe(data => {
				this.users=data;
				if(this.users.status == -1){
					this.alertFail();
				} 
				else{
					this.alertSuccess();
				}
			});
		}
	
	});
	modal.present();
  }

}

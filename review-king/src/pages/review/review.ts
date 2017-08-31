import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';


/**
 * Generated class for the ReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
@Pipe({ name: 'safe' })
export class ReviewPage implements PipeTransform {

reviewToUpdate: any;
url: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public sanitizer: DomSanitizer) {
	this.reviewToUpdate = navParams.get('review');
	this.url=this.reviewToUpdate.video;
  }
  transform(url){
	console.log(url);
	return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close(): void {
	this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
  	console.log(this.reviewToUpdate);
	console.log(this.url);
	console.log('ionViewDidLoad ReviewPage');
  }

}

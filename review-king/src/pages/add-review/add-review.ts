import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddReviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'add-review-page',
  templateUrl: 'add-review.html'
})
export class AddReviewPage {
 
  title: any;
  user: any;
  description: any;
  rating: any;
  image: any;
  video: any;
 
  constructor(public viewCtrl: ViewController,public navParams: NavParams) {
        this.user = navParams.get('username');
 
  }
 
  save(): void {
    let review = {
      title: this.title,
      user: this.user,
      description: this.description,
      rating: this.rating,
      image: this.image,
      video: this.video
    };
 
    this.viewCtrl.dismiss(review);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}

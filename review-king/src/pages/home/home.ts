import { Component } from "@angular/core";
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { AddReviewPage } from '../add-review/add-review';
import { Reviews } from '../../providers/reviews/reviews';
import { ModifyItemPage } from '../modify-item/modify-item';
import { ReviewPage } from '../review/review';

 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  reviews: any;
  
  user: any;  
 
  constructor(public nav: NavController, public reviewService: Reviews, public modalCtrl: ModalController, public navParams: NavParams) {
 	this.user = navParams.get('username');
  }
 
  ionViewDidLoad(){
 
    this.reviewService.getReviews(this.user).then((data) => {
     // console.log(data);
      this.reviews = data;
    });
 
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AddReviewPage, {username:this.user});
 
    modal.onDidDismiss(review => {
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review).subscribe(data => {
		
		//console.log(data);
		this.reviews = data;
	});        
      }
    });
 
    modal.present();
 
  }

  updateReview(review){
    let modal = this.modalCtrl.create(ModifyItemPage, {review: review});
    modal.onDidDismiss(review => {
      if(review){
      	console.log(review);
 	this.reviews.push(review);
        this.reviewService.updateReview(review).subscribe(data => {
                //console.log(data);
                this.reviews = data;
        });
      }
    });

    modal.present();
	
  }

  showReview(review){
    let modal = this.modalCtrl.create(ReviewPage, {review: review});
    modal.onDidDismiss(review => {
      if(review){
        console.log(review);
        this.reviews.push(review);
        this.reviews = review;
        
      }
    });

    modal.present();

  }
 
  deleteReview(review){
 
    //Remove locally
      let index = this.reviews.indexOf(review);
 	//console.log(review);
      if(index > -1){
        this.reviews.splice(index, 1);
      }   
 
    //Remove from database
    this.reviewService.deleteReview(review._id).subscribe(data => {
	console.log(data);
    });
  }
 
}

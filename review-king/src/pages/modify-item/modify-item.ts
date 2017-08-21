import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModifyItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-item',
  templateUrl: 'modify-item.html',
})
export class ModifyItemPage {
	
	title:any;
	description: any;
	rating: any;
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
	save(): void {

		let review= {
			title: this.title,
			description: this.description,
			rating: this.rating
		};
		this.viewCtrl.dismiss(review);
	}	

	close(): void {
		this.viewCtrl.dismiss();
	}

}

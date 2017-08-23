import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reviews } from '../../providers/reviews/reviews';

/**
 * Generated class for the AdminControlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-control',
  templateUrl: 'admin-control.html',
})
export class AdminControlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public reviewService: Reviews) {
  }


  csvJSON(csv) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
}

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
       
	const reader = new FileReader();
	    reader.onload = () => {
	    let text = reader.result;
    	    console.log('CSVVVV: ', text.substring(0, 100) + '...');
	    var json = this.csvJSON(text);
	    console.log('JSON: ',json);
	    for(var i=0; i < json.length;i++){
	    	console.log(json[i]);
		this.reviewService.createReview(json[i]).subscribe(data => {
			console.log('INSERTADO: ',data);
		});
	    }
	};
	reader.readAsText(file);

/* let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )*/
    }
  }
}

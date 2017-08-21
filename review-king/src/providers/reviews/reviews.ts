import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Reviews {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getReviews(username){
 
    if (this.data) {
        return Promise.resolve(this.data);
    }

    let params = new URLSearchParams();
    params.set('user',username);

    return new Promise(resolve => {
      this.http.get('http://adminReviews:adminReviews@52.51.10.229:15015/api/reviews',
	{search: params})
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createReview(review){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://52.51.10.229:15015/api/reviews', 
	JSON.stringify(review), {headers: headers})
      .map(res => res.json());
      
 
  }
 
  deleteReview(id){
 
    this.http.delete('http://52.51.10.229:15015/api/reviews/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
}

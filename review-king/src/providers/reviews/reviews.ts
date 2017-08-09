import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
 
  getReviews(){
 
    if (this.data) {
      console.log("HOASDKBASKJDASBKJD");
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://172.26.0.34:8080/api/reviews')
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
 
    this.http.post('http://172.26.0.34:8080/api/reviews', JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deleteReview(id){
 
    this.http.delete('http://172.26.0.34:8080/api/reviews/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
}
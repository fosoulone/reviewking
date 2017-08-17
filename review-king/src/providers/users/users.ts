import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Users {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getUsers(){

    if (this.data) {
        return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://adminReviews:adminReviews@52.51.10.229:15015/api/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });

    });

  }

  loginUser(user){
	let headers = new Headers();
   	headers.append('Content-Type', 'application/json');

    	return this.http.post('http://52.51.10.229:15015/api/users',
        JSON.stringify(user), {headers: headers})
      	.map(res => res.json());
  }

  createUser(user){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://52.51.10.229:15015/api/users',
        JSON.stringify(user), {headers: headers})
      .map(res => res.json());


  }

  

  

}


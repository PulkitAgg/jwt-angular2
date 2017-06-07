import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceUsingJWT {
  constructor(private _http: Http) { }

  auth(data): Observable<any> {
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8888/api/authenticate", data, headers).map(res => res.json());
  }

  randome(): Observable<any> {
    console.log("in randome");
    return this._http.get("http://localhost:8888/api/").map(res => res.json()
    );

  }

  postUser(): Observable<any> {
    //specific user
    console.log("in postUser")
    let user = {
      name: "fixuser",
      password: "fixuser"
    }
    let token = localStorage.getItem("token");
    console.log(token);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': "Bearer " + token });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:8888/api/setup", user, options).map(res => res.json())
  }
}

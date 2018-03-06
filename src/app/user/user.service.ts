import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAppConfig } from '../app.config';
import { Observable} from 'rxjs/Observable';
import { RequestOptions, Request, RequestMethod, Http, Headers, Response } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private config: IAppConfig) {}
  users: User[] ;

  getAllUsers() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    this.users =  this.http.get(this.config.apiEndpoint + '/api/lead/list' )
      .subscribe((data: Response) => {
        return data.json().data;
      });


    // this.http.get('/contacts').subscribe(data => {
    //   this.contacts = data;
    // });
  }
  private handleError(error: any) {
    console.error('Erro:', error);
    return Observable.throw(error);
  }

  getUsers() {

  }


}

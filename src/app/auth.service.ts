import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {promise} from "selenium-webdriver";

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private url: string) {
    this.url = this.GetServerUrl();
  }

  // TODO: auto route to server on same domain
  private GetServerUrl(): string {
    return 'http://localhost:9000/api/';
  }

  // TODO test this
  public Login(username: string, password: string): Promise<any> {
    return this.http.post(this.url + 'login', JSON.stringify({
        'username': username,
        'password': password
      }),
      {headers: this.headers}
    ).toPromise()
      .then(response => response.json().data)
      .catch(err => {
        console.log('Login error at auth service', err);
        return Promise.reject(err.message || err);
      });
  }

  // TODO implement
  public Logout(): Promise<any> {
    return null;
  }

  // TODO implement
  public SignIn(): Promise<any> {
    return null;
  }

}

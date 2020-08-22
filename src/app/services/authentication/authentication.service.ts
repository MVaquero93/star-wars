import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {base64} from "../../helpers/base64";
import {HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable, of, throwError} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  headers = new HttpHeaders()

  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  login(username, password): Observable<any> {
      const user = this.userService.getByUsername(username)
      if (user && user.password === password) {
        return of('success')
      }
      return throwError('Invalid credentials');
  }

  setCredentials(username, password) {
    var authdata = base64.encode(username + ':' + password);

    const currentUser = {
      username: username,
      authdata: authdata
    };

    // set default auth header for http requests
    this.headers.append('Authorization', 'Basic ' + authdata);

    // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
    let cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);
    this.cookieService.set('credentials', JSON.stringify(currentUser), cookieExp)
  }

  clearCredentials() {
    this.cookieService.delete('credentials');
    this.headers.append('Authorization', 'Basic');
  }
}

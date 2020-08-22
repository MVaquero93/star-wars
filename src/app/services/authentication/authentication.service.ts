import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {base64} from "../../helpers/base64";
import {HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  headers = new HttpHeaders()

  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  login(username, password) {

    /* Dummy authentication for testing, uses setTimeout to simulate api call
     ----------------------------------------------*/
    setTimeout(() => {
      this.userService.getByUsername(username).subscribe(
        (user) => {
          if (user !== null && user.password === password) {
              return 'success'
            } else {
              return 'Username or password is incorrect'
            }
        }
      )
    }, 1000);
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
    this.cookieService.set('globals', JSON.stringify(currentUser), cookieExp)
  }

  clearCredentials() {
    this.cookieService.delete('globals');
    this.headers.append('Authorization', 'Basic');
  }
}

import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.cookieService.get('credentials')) return this.goToLogin()
    const credentials = this.cookieService.get('credentials')
    const cookieCredentials = JSON.parse(credentials)
    return (cookieCredentials.username) ? true : this.goToLogin()
  }

  goToLogin() {
    this.router.navigate(['login'])
    return false
  }

}

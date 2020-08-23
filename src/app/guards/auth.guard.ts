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
    const cookieCredentials = JSON.parse(this.cookieService.get('credentials'))
    if(cookieCredentials.username) return true
    return this.goToLogin()
  }

  goToLogin() {
    this.router.navigate([''])
    return false
  }

}

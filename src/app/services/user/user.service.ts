import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getByUsername(username): string {
    return localStorage.getItem(username);
  }
}

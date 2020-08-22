import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() {
  }

  getAll(): Observable<any> {
    return of(this.getUsers());
  }

  getById(id): Observable<any> {
    return of(this.getUsers().find((user) => user.id === id));
  }

  getByUsername(username): Observable<any> {
    return of(this.getUsers().find((user) => user.username === username));
  }

  create(user): Observable<any> {

    setTimeout(() => {
      this.getByUsername(user.username).subscribe((duplicateUser) => {
        if (duplicateUser !== null) {
          return 'Username ' + user.username + ' is already taken';
        } else {
          let users = this.getUsers()

          // assign id
          const lastUser = users.slice(-1)[0] || {id: 0};
          user.id = lastUser.id + 1;

          // save to local storage
          users = [...users, user];
          this.setUsers(users);
        }
      });
    }, 1000);
  }

  update(userUpdate): void {
    const users = this.getUsers();
    const userIndex = users.findIndex((user) => user.id === userUpdate.id);
    users[userIndex] = userUpdate
    this.setUsers(users);
  }

  delete(id): void {
    const users = this.getUsers();
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex > -1) users.splice(userIndex, 1);
    this.setUsers(users);
  }

  // private functions

  private getUsers(): any {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }
    return JSON.parse(localStorage.users);
  }

  private setUsers(users): void {
    localStorage.users = JSON.stringify(users);
  }
}

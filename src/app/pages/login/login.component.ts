import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required])
  pass = new FormControl('', [Validators.required])
  dataLoading: boolean

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  getPassError(): string {
    return '';
  }

  getUsernameError(): string {
    return '';
  }

  login(): void {
    this.dataLoading = true
  }
}

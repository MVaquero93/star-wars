import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required])
  pass = new FormControl('', [Validators.required])
  dataLoading: boolean
  credentialsError: boolean

  errors = {
    required: 'Required field',
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getPassError() {
    return this.pass.hasError('required') ? this.errors.required : ''
  }

  getUsernameError() {
    return this.username.hasError('required') ? this.errors.required : ''
  }

  login(): void {
    if (this.username.errors || this.pass.errors) return
    this.dataLoading = true
    this.authenticationService.login(this.username.value, this.pass.value).subscribe(
      () => {
        this.authenticationService.setCredentials(this.username, this.pass)
        this.dataLoading = false
        // this.router.navigate(['ships'])
      },
      (err) => {
        this.credentialsError = err
        this.username.reset()
        this.pass.reset()
        this.dataLoading = false
      }
    )
  }

  goToRegister() {
    this.router.navigate(['register'])
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  dataLoading: boolean
  registerError: any

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  register(): void {
    this.dataLoading = true;
    this.userService.create(this.form.value)
      .pipe(first())
      .subscribe(() => {
      this.dataLoading = false;
      this.router.navigate([''])
    }, (err) => {
      this.registerError = err
      this.form.clearValidators()
      this.dataLoading = false;
    });
  }

  cancel() {
    this.router.navigate(['login'])
  }
}

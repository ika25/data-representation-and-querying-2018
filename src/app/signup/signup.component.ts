import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { constants } from '../app.constants'
import { ApiService } from "../api.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupData = { 
    username: '',
    password: ''
  };
  message: '';

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  signup() {

    this.api.signup(this.signupData).subscribe(resp => {
      this.router.navigate([constants.pageUrl.signin]);
    }, error => {
      this.message = error.error.msg;
    });
  }

}

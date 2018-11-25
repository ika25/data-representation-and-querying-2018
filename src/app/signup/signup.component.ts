import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { AppConstants } from '../shared/util/constants'

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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.http.post(AppConstants.baseURL + '/signup', this.signupData).subscribe(success => {
      this.router.navigate(['login']);
    }, error => {
      this.message = error.error.msg;
    });
  }

}

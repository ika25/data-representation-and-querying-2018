import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { constants } from '../app.constants'
import { ApiService } from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { username:'', password:'' };
  message = '';
  data: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  login() {

    this.api.signin(this.loginData).subscribe(resp => {
      this.data = resp;
      // Add jwt in localstorage
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate([constants.pageUrl.disasters]);
    }, err => {
      this.message = err.error.msg;
    });
  }

}

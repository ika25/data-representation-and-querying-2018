import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";

import { ApiService } from "../api.service";
import { constants } from "../app.constants";

@Component({
  selector: 'app-disaster-create',
  templateUrl: './disaster-create.component.html',
  styleUrls: ['./disaster-create.component.css']
})
export class DisasterCreateComponent implements OnInit {

  disaster = { };
  message = '';

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.api.saveDisaster(this.disaster).subscribe(resp => {
      if(resp.success === true) {
        this.router.navigate([constants.pageUrl.disasters]);
      } else {
        this.message = resp.msg;
      }
    }, err => {
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      } else {
        this.message = constants.errors.unExpected;
      }
    });
  }

}

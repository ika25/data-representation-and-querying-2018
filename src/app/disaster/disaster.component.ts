import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { constants } from '../app.constants'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.css']
})
export class DisasterComponent implements OnInit {

  disasters: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {

    this.getDisasters();
  }

  // Get all disasters
  getDisasters() {
    this.api.getDisasters()
    .subscribe(res => {
      console.log(res);
      this.disasters = res;
    }, err => {
      console.log(err);
      // If user is not loggedin then it will be redirect to login page
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      }
    });
  }

  // Delete disaster
  delete(id) {
    this.api.deleteDisaster(id).subscribe(resp => {
      this.getDisasters();
    }, err => {
      console.log(err);
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { constants } from '../app.constants'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-disaster-edit',
  templateUrl: './disaster-edit.component.html',
  styleUrls: ['./disaster-edit.component.css']
})
export class DisasterEditComponent implements OnInit {

  disaster = {};
  message = "";

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDisaster(this.route.snapshot.params['id']);
  }

  getDisaster(id) {
    this.api.getDisaster(id).subscribe(resp => {
      this.disaster = resp;
      // if(resp.success === true) {
      //   this.disaster = resp;
      //   
      // } else {
      //   this.message = resp.msg;
      // }
    }, err => {
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      } else {
        this.message = constants.errors.unExpected;
      }
    });
  }

  edit() {
    this.api.updateDisaster(this.disaster['_id'], this.disaster).subscribe(resp => {
      this.router.navigate([constants.pageUrl.disasters]);
    }, err => {
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      } else {
        this.message = constants.errors.unExpected;
      }
    })
  }

}

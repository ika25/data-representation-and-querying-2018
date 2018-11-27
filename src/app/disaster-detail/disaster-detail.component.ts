import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

import { ApiService } from "../api.service"
import { constants } from "../app.constants"

@Component({
  selector: 'app-disaster-detail',
  templateUrl: './disaster-detail.component.html',
  styleUrls: ['./disaster-detail.component.css']
})
export class DisasterDetailComponent implements OnInit {

  disaster = {};
  message = "";

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDisaster(this.route.snapshot.params['id']);
  }

  // Get disaster by id
  getDisaster(id) {
    this.api.getDisaster(id).subscribe(resp => {
      this.disaster = resp;
    }, err => {
      // If user is not loggedin then it will be redirect to login page
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      } else {
        this.message = constants.errors.unExpected;
      }
    });
  }
}

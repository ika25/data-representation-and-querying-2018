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

    this.api.getDisasters()
    .subscribe(res => {
      console.log(res);
      this.disasters = res;
    }, err => {
      console.log(err);
      if(err.status === 401) {
        this.router.navigate([constants.pageUrl.signin]);
      }
    });
  }

}

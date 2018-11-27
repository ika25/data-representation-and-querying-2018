import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { constants } from '../app.constants'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-top-five-disasters-by-death',
  templateUrl: './top-five-disasters-by-death.component.html',
  styleUrls: ['./top-five-disasters-by-death.component.css']
})
export class TopFiveDisastersByDeathComponent implements OnInit {

  disasters: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {

    this.getDisasters();
  }

  getDisasters() {
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

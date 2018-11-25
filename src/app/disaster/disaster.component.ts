import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

import { AppConstants } from '../shared/util/constants'

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.css']
})
export class DisasterComponent implements OnInit {

  disasters: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('jwtToken') === null ? '' : localStorage.getItem('jwtToken')
      })
    };
    this.http.get(AppConstants.baseURL + '/disasters', httpOptions).subscribe(data => {
      this.disasters = data;
    }, error => {
      console.log(error);
      if(error.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}

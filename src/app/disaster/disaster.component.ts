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

  constructor(private router: Router) { }

  ngOnInit() {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': localStorage.getItem('jwtToken') === null ? '' : localStorage.getItem('jwtToken')
    //   })
    // };
    // this.http.get(constants.baseUrl + constants.apiUrl.disasters, httpOptions).subscribe(data => {
    //   this.disasters = data;
    // }, error => {
    //   console.log(error);
    //   if(error.status === 401) {
    //     this.router.navigate(['login']);
    //   }
    // });
  }

}

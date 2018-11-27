import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { constants } from "../../../app.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    // Logout and remove jwt from localstorage
    localStorage.removeItem('jwtToken');
    this.router.navigate([constants.pageUrl.signin]);
  }

}

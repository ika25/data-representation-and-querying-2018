import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { constants } from "./app.constants"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disaster-monitoring';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate([constants.pageUrl.signin]);
  }
}

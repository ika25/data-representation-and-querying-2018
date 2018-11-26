import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { constants } from './app.constants'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = constants.baseUrl + "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDisasters(): Observable<any> {
    return this.http.get(apiUrl + '/disasters').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      // Client side error
    } else {
      // Backend-service error
      if(error.status === 401) {
        // TODO: Emit to login page
      }
    }

    return throwError(error)
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}

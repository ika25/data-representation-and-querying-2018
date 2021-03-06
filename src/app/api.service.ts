import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { constants } from './app.constants'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiBaseUrl = constants.baseUrl + "/api";

// This class act as service for angular app, that call backend apis and get result/error from the api to transfer to component
// It acts bridge between angular components and backend apis
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDisasters(): Observable<any> {
    
    return this.http.get(apiBaseUrl + constants.apiUrl.disasters.all, this.getHeaderOptions()).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getDisaster(id: string): Observable<any> {
    return this.http.get(apiBaseUrl + constants.apiUrl.disasters.get + id, this.getHeaderOptions())
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  saveDisaster(disaster): Observable<any> {
    return this.http.post(apiBaseUrl + constants.apiUrl.disasters.save, disaster, this.getHeaderOptions())
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  updateDisaster(id, disaster): Observable<any> {
    return this.http.put(apiBaseUrl + constants.apiUrl.disasters.update + id, disaster, this.getHeaderOptions())
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  deleteDisaster(id: string): Observable<any> {
    return this.http.delete(apiBaseUrl + constants.apiUrl.disasters.delete + id, this.getHeaderOptions())
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  signin(data): Observable<any> {
    return this.http.post(apiBaseUrl + constants.apiUrl.signin, data)
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  signup(data): Observable<any> {
    return this.http.post(apiBaseUrl + constants.apiUrl.signup, data)
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getTopFiveDisastersByDeath(): Observable<any> {
    return this.http.get(apiBaseUrl + constants.apiUrl.disasters.topFiveByDeaths, this.getHeaderOptions())
    .pipe(
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
      }
    }
    
    // Throw error so that component catch it and act accordingly
    return throwError(error)
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // Insert JWT from local storage into the http headers
  private getHeaderOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('jwtToken') === null ? '' : localStorage.getItem('jwtToken')
      })
    };
  }
}

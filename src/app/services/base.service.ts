import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, share } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }
  public get(url: string): Observable<any> {
    this.spinner.show();
    return this.http.get<any>(url)
  }

  public getWithAuth(url: string, authCredentials: any): Observable<any> {
    this.spinner.show();
    let authorizationData = 'Basic ' + window.btoa(authCredentials.username + ':' + authCredentials.password);
    const body = {};
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': authorizationData
    };
    return this.http.get<any>(url, { 'headers': headers })
  }

  public post(url: string, model: any): Observable<any> {

    this.spinner.show();
    const headers = {
      'content-type': 'application/json',
      'x-api-key': 'N2QChsaTXm2a6ZcUsC7xs6BH0fO0eJc7ZfS6qef7'
    }
    const body = JSON.stringify(model);

    return this.http.post(url, body, { 'headers': headers })
  }

  public getWithBasicAuth(url: string, authCredentials: any): Observable<any> {
    let authorizationData = 'Basic ' + window.btoa(authCredentials.username + ':' + authCredentials.password);
    this.spinner.show();
    const body = {};
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': authorizationData
    });

    return this.http.post(url, body, { 'headers': headers })
  }

  public put(url: string, model: any, noSpinner?: boolean): Observable<any> {
    this.spinner.show();
    const body = JSON.stringify(model);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    return this.http.put<any>(url, body, options).pipe(
      tap(
        (response) => {
          this.spinner.hide();
        },
        (err) => {
          this.spinner.hide();
          return throwError(err);
        }
      ),
      catchError(this.handleErrorObservable)
    );
  }

  public delete(url: string, body: any, noSpinner?: boolean): Observable<any> {
    this.spinner.show();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
      body: body,
    };

    return this.http.delete<any>(url, options).pipe(
      tap(
        (response) => {
          this.spinner.hide();
        },
        (err) => {
          this.spinner.hide();
          return throwError(err);
        }
      ),
      catchError(this.handleErrorObservable)
    );
  }

  public handleErrorObservable(error: Response | any) {
    return throwError(error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap, share } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root',
})
export class GitOpsAPIService {

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

    public postEksMicroservice(url: string, authCredentials: any): Observable<any> {
        this.spinner.show();
        let authorizationData = 'Basic ' + window.btoa(authCredentials.username + ':' + authCredentials.password);
        const body = {};
        const headers = {
          'Authorization': authorizationData,
          'Cookie':'JSESSIONID.d0af6b94=node0ly563iigxr81iffs71a9y0cl977.node0',
          'Jenkins-Crumb':'23163badeeb7571603642bfd69286cdece3fc18bdd19ebbab49ff91857ec6e9a'
        };
        return this.http.post<any>(url, { 'headers': headers })
      }

      public postServerlessNLP(url: string, authCredentials: any): Observable<any> {
        this.spinner.show();
        let authorizationData = 'Basic ' + window.btoa(authCredentials.username + ':' + authCredentials.password);
        const body = {};
        const headers = {
          'Authorization': authorizationData,
          'Cookie':'JSESSIONID.d0af6b94=node0ly563iigxr81iffs71a9y0cl977.node0',
          'Jenkins-Crumb':'23163badeeb7571603642bfd69286cdece3fc18bdd19ebbab49ff91857ec6e9a'
        };
        return this.http.post<any>(url, { 'headers': headers })
      }

}
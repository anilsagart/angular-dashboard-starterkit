import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  redirectUrl: string | undefined;

  constructor(private router: Router) {
    console.log("loginservice");
    
   }

  login(): Observable<boolean> {
    this.isLoggedIn.next(true);
    return this.isLoggedIn$;
  }

  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }

}
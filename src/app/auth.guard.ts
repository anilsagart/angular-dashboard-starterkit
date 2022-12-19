import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './pages/login/login.service';


@Injectable()
export class AuthGuard implements CanActivate {
    loginStatus: boolean = false;
    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        let url: string = state.url;
        console.log(url);
        this.loginStatus = Boolean(localStorage.getItem("loginStatus"));
        if (localStorage.getItem('loginStatus')) {
            this.loginService.isLoggedIn.next(true);
            return true;
        }
        this.loginService.isLoggedIn.next(false);
        this.router.navigate(['/login']);
        return false;
    }

    //   checkLogin(url: string): Observable<boolean> {
    //     if (this.loggedInService.isLoggedIn) {
    //       return true;
    //     } else {
    //       this.loggedInService.redirectUrl = url;
    //       return false;
    //     }
    //     return this.loggedInService.isLoggedIn$;
    //   }
}

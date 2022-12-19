import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from 'src/app/app.service';
import { LoginService } from 'src/app/pages/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private appService : AppService
  ) {
    this.loginService.loggedUser.subscribe((data) => {
      if (data) {
        this.userName = data.username;
      }
      else {
        this.userName = String(localStorage.getItem('username'));
      }
    })
  }
  ngOnInit(): void {
  }

  logout() {
    // this.spinner.show();
    this.appService.close();
    localStorage.clear();
    this.loginService.isLoggedIn.next(false)
    this.router.navigate(['']);
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);

  }

}

import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from './app.service';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graphical_dashboard';
  showFiller = false;
  loginStatus: boolean = false;
  @ViewChild('drawer') drawerPanel: MatDrawer;

  constructor(
    private loginService: LoginService,
    private appService : AppService) {
    this.loginService.isLoggedIn.subscribe((data) => {
      this.loginStatus = data;
    })
  }
  
  ngAfterViewInit() {
    this.appService.setDrawer(this.drawerPanel);
  }


}

import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { BaseService } from '../../services/base.service';
import {dashBoardCardDataModel} from './dashboard-cardData.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardCardData = dashBoardCardDataModel;
  dashboardCardApiData:any;
  constructor(
    private appService : AppService
  ) { 
   }

  ngOnInit(): void {
    this.appService.close();
  }

}

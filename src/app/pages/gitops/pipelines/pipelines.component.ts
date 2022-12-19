import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/app.service';
import { GitOpsAPIService } from '../gitops-api-service';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.scss']
})
export class PipelinesComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public gitOpsApiService:GitOpsAPIService,
    private appService : AppService,
    ) { 
    this.appService.close();

    }

  ngOnInit(): void {
  }

}

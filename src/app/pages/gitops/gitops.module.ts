import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { GitopsComponent } from './gitops.component';
import { GitopsRoutingModule } from './gitops-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        GitopsRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        MatRadioModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        GitopsComponent,
        PipelinesComponent,
    ]
})
export class GitopsModule { }
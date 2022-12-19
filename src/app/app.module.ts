import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from "angular-progress-bar";
import { LoginComponent } from './pages/login/login.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { LoginService } from './pages/login/login.service';
import { GitOpsAPIService } from './pages/gitops/gitops-api-service';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HeaderComponent,
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    ProgressBarModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', 
        totalMessage: 'total', 
        selectedMessage: 'selected' 
      }
    }),

  ],
  entryComponents: [],
  providers: [
    AuthGuard,
    LoginService,
    GitOpsAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

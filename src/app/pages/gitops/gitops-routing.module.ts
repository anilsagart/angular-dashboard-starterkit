import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipelinesComponent } from './pipelines/pipelines.component';


const routes: Routes = [
  {
    path: 'pipelines', component: PipelinesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitopsRoutingModule { }
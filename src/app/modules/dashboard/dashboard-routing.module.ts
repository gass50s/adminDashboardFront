import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainViewComponent } from './dashboard-main-view/dashboard-main-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMainViewComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DashboardRouter {}

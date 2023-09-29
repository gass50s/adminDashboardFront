import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionService } from './apis/authentification/permission.service';
import routing from './config/routes.json';
import { DashboardFynkaHomePageComponent } from './modules/dashboard/dashboard-fynka-home-page/dashboard-fynka-home-page.component';
import { DashboardMainViewComponent } from './modules/dashboard/dashboard-main-view/dashboard-main-view.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardFynkaHomePageComponent,
  },
  {
    path: routing.users_management.main_routes,
    loadChildren: () =>
      import('./modules/users-managements/users-management.module').then(
        (value) => value.UsersManagementModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (value) => value.DashboardModule
      ),
    canActivate: [PermissionService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

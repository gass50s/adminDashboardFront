import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import routesDefinition from '../../config/routes.json';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
 
  {
    path: routesDefinition.users_management.main_routes,
    children: [
      {
        path: routesDefinition.users_management.sign_in,
        component: SignInComponent,
      },
      {
        path: routesDefinition.users_management.sign_up,
        component: SignUpComponent,
      },
    ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [],
})
export class UsersManagementRouting {}

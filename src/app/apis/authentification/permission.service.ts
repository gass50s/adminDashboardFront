import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import url from 'src/app/config/routes.json';
import { AuthentificateService } from './authentificate.service';
import offlinekeys from 'src/app/config/offlinekeys.json';
import apiroute from 'src/app/config/api-routes.json'
import { environment } from 'src/environments/environment';
class UserToken {}
class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}
@Injectable({
  providedIn: 'root',
})
export class PermissionService implements CanActivate {
  endpoint_url = url.dashboard.home;
  sign_in_url = url.users_management.sign_in;
  isLoggedIn: boolean = false;
  base_url: any = environment.base_url;
  public redirectUrl: string;
  constructor(
    private authService: AuthentificateService,
    private router: Router,private httpclient: HttpClient
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(uri: string): boolean {
    if (localStorage.getItem(offlinekeys.dev.ACCESS_TOKEN)) {
      return true;
    }
    this.authService.redirectUrl = uri;
    this.router.navigate([
      url.users_management.main_routes + '/' + this.sign_in_url,
    ]);
    
    return false;
  }
  
}

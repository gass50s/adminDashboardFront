import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, throwError } from 'rxjs';
import jsonEndpoint from 'src/app/config/api-routes.json';
import offlinekeys from 'src/app/config/offlinekeys.json';
import { environment } from 'src/environments/environment';
import url from 'src/app/config/routes.json';

@Injectable({
  providedIn: 'root',
})
export class AuthentificateService {
  base_url: any = environment.base_url;
  isLoggedIn: boolean = false;
  endpoint_url = url.dashboard.home;
  sign_in= url.users_management.sign_in
  public redirectUrl: string;
  constructor(private httpclient: HttpClient, private router: Router) {}
  getlogin(data: any) {
    const url = this.base_url + jsonEndpoint.dev.endpoint.authentificate.login;
    let form = new FormData();
    form.append('email', data.value.email);
    form.append('password', data.value.password);
    return this.httpclient.post(url, form);
  }

  getregister(data: any) {
    const url =
      this.base_url + jsonEndpoint.dev.endpoint.authentificate.register;
    let form = new FormData();
    for (const [key, value] of Object.entries(data.value)) {
      if (!data.value[key]) return from('error' + key);
    }
    form.append('body', JSON.stringify(data.value));
    return this.httpclient.post(url, form);
  }

  getlogout() {
    const url = this.base_url + jsonEndpoint.dev.endpoint.authentificate.logout;
    return this.httpclient.post(url, offlinekeys.dev.ACCESS_TOKEN);
  }

}

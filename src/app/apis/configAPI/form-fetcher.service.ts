import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormFetcherAPI {
  constructor(private httpclient: HttpClient) {}

  fetchLogin() {
    return this.httpclient.get('/assets/signinform.json');
  }
}

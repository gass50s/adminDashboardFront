import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardFynkaHomePageComponent } from 'src/app/modules/dashboard/dashboard-fynka-home-page/dashboard-fynka-home-page.component';
@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get('assets/images/photos.json');
  }
}

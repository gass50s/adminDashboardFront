import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FormFetcherAPI } from 'src/app/apis/configAPI/form-fetcher.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard-main-view',
  templateUrl: './dashboard-main-view.component.html',
  styleUrls: ['./dashboard-main-view.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DashboardMainViewComponent implements OnInit {
  controls: any;
  options: any;
  today: number = Date.now();
    overlays: any[];
  multiAxisData: any;
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  isMenuOpened:boolean=false
  user$: Observable<User>;
  constructor(
    private translateService: TranslateService,private formFetcherAPI: FormFetcherAPI,private fb: FormBuilder,
    private store: Store<{ usersSession: User }>,
  ) {
    this.user$ = store.select('usersSession');
  }

  ngOnInit(): void {
    this.formFetcherAPI.fetchLogin().subscribe((formData: any) => {
      this.controls = formData;  
    });
    this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'download',
          fill: false,
          borderColor: 'red',
          yAxisID: 'y',
          tension: .01,
          data: [65, 59, 80, 81, 56, 55, 10]
      }]
  };
  
  this.options = {
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
};
}

  setLangage(lang: string) {
    this.translateService.use(lang);
  }

 
}

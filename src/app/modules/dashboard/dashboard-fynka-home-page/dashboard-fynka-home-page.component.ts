import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PhotoServiceService } from 'src/app/apis/photo-service.service';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import routes from '../../../config/routes.json';

@Component({
  selector: 'app-dashboard-fynka-home-page',
  templateUrl: './dashboard-fynka-home-page.component.html',
  styleUrls: ['./dashboard-fynka-home-page.component.scss'],
})
export class DashboardFynkaHomePageComponent implements OnInit {
  images: any[] ;
  signInRoute: string = routes.users_management.sign_in;
  route: string = 'users-management/' + this.signInRoute;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(
    private translate: TranslateService,
    private photoService: PhotoServiceService,
    private translateService: TranslateService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.photoService.getImages().pipe(take(1)).subscribe((data) => {this.images = data.data});
  }
  setLangage(lang: string) {
    this.translateService.use(lang);
  }

  navigate() {
    this.router.navigateByUrl(this.route);
  }
}

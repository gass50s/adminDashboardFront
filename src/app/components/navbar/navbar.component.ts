import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFetcherAPI } from 'src/app/apis/configAPI/form-fetcher.service';
import { createForm } from 'src/app/utils/forms';
import url from 'src/app/config/routes.json';
import { AuthentificateService } from 'src/app/apis/authentification/authentificate.service';
import offlinekeys from 'src/app/config/offlinekeys.json';
import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public control: any;
  myform: FormGroup;
  controls: any;
  user$: Observable<User>;
  images: any[];
  isMenuOpened: boolean = false;
  sign_in = url.users_management.sign_in;

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
    private translateService: TranslateService,
    private formFetcherAPI: FormFetcherAPI,
    private fb: FormBuilder,
    private store: Store<{ usersSession: User }>,
    private authService: AuthentificateService,
    private router: Router
  ) {
    this.user$ = store.select('usersSession');
    translateService.setDefaultLang('es');
    translateService.use('es');
  }

  ngOnInit(): void {
    this.formFetcherAPI.fetchLogin().subscribe((formData: any) => {
      this.controls = formData;
      this.myform = createForm(this.controls.navbar_columns, this.fb);
    });
  }

  setLangage(lang: string) {
    this.translateService.use(lang);
  }

  logout() {
    this.authService.getlogout().subscribe({
      next: (val: any) => {
        console.log(val);
        localStorage.removeItem(offlinekeys.dev.ACCESS_TOKEN);
        localStorage.removeItem('user-data')
        this.router.navigateByUrl('/');
      },
    });
  }
}

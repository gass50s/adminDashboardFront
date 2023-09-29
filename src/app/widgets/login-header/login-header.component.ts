import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import routes from '../../../app/config/routes.json';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss'],
})
export class LoginHeaderComponent implements OnInit {
  @Output() routeToNavigateTo: EventEmitter<void> = new EventEmitter();
  signInRoute: string = routes.users_management.sign_in;
  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  navigate() {
    this.routeToNavigateTo.emit();
  }
  setLangage(lang: string) {
    this.translateService.use(lang);
  }
}

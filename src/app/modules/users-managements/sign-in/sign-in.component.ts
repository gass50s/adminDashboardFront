import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JsonFormData, createForm } from 'src/app/utils/forms';
import { TranslateService } from '@ngx-translate/core';
import { FormFetcherAPI } from 'src/app/apis/configAPI/form-fetcher.service';
import { AuthentificateService } from 'src/app/apis/authentification/authentificate.service';
import { Observable, take } from 'rxjs';
import offlinekeys from 'src/app/config/offlinekeys.json';
import routes from '../../../config/routes.json';
import { Router } from '@angular/router';
import { _resolveDirectionality } from '@angular/cdk/bidi/directionality';
import url from 'src/app/config/routes.json';
import { extractErrorMessagesFromErrorResponse } from '../../../utils/error-handle';
import { FormStatus } from 'src/app/utils/form-status';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService],
})
export class SignInComponent implements OnInit {
  public values: any[] = [];
  public formdata: JsonFormData;
  hide = true;
  myform: FormGroup;
  controls: any;
  endpoint_url = url.dashboard.home;
  formStatus = new FormStatus();
  signInRoute: string = routes.users_management.sign_in;
  route: string = 'users-management/' + this.signInRoute;
  public user:any
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private formFetcherAPI: FormFetcherAPI,
    private authService: AuthentificateService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formFetcherAPI.fetchLogin().subscribe((formData: any) => {
      this.controls = formData;
      this.myform = createForm(this.controls.sign_in, this.fb);
    });
  }

  onSubmit() {
    this.formStatus.onFormSubmitting();
    this.authService
      .getlogin(this.myform)
      .pipe(take(1))
      .subscribe({
        next: (val: any) => {
          localStorage.setItem(offlinekeys.dev.ACCESS_TOKEN, val.data.token);
          this.user = val.data.user 
          console.log(this.user)       
          this.router.navigate([this.endpoint_url]);
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
          const messages = extractErrorMessagesFromErrorResponse(errorResponse);
          this.formStatus.onFormSubmitResponse({
            success: false,
            messages: messages,
          });
          for (let error of this.formStatus.errors) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: error,
            });
          }
        },
      });
  }

  navigate() {
    this.router.navigateByUrl(this.route);
  }
  signup() {
    this.router.navigate(['/users-management/sign-up']);
  }
}

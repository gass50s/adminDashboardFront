import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JsonFormData, createForm } from 'src/app/utils/forms';
import { FormFetcherAPI } from 'src/app/apis/configAPI/form-fetcher.service';
import { AuthentificateService } from 'src/app/apis/authentification/authentificate.service';
import { take } from 'rxjs';
import offlinekeys from 'src/app/config/offlinekeys.json';
import { Router } from '@angular/router';
import routes from '../../../config/routes.json';
import { MessageService } from 'primeng/api';
import url from 'src/app/config/routes.json';
import { TranslateService } from '@ngx-translate/core';
import { extractErrorMessagesFromErrorResponse } from 'src/app/utils/error-handle';
import { FormStatus } from 'src/app/utils/form-status';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [MessageService],
})
export class SignUpComponent implements OnInit {
  public formdata: JsonFormData;
  email: string;
  email_confirmation: string;
  endpoint_url = url.dashboard.home;

  password: string;
  formStatus = new FormStatus();
  error: any;
  error_border_class:string;
  password_confirmation: string;
  myform: FormGroup;
  controls: any;
  aux: boolean = false;
  signInRoute: string = routes.users_management.sign_in;
  route: string = 'users-management/' + this.signInRoute;
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private messageService: MessageService,
    private formFetcherAPI: FormFetcherAPI,
    private authService: AuthentificateService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.formFetcherAPI.fetchLogin().subscribe((formData: any) => {
      this.controls = formData;
      this.myform = createForm(this.controls.sign_up, this.fb);
    });
  }

  onSubmit() {
   
    if(this.myform.value.email==null||this.myform.value.email_confirmation==null||this.myform.value.surname==null ||this.myform.value.last_name==null||this.myform.value.password==null||this.myform.value.password_confirmation==null){
      this.error_border_class='border-error';
      
    }
    
     else if(this.myform.value.sexe==null){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: this.translate.instant('labels.sex-req'),
      });
      this.error=1
    } else if (this.myform.value.member==null){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: this.translate.instant('labels.member-req'),
      });
      this.error=1
    }else if (this.myform.value.email_confirmation!= null&&this.myform.value.email != this.myform.value.email_confirmation) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: this.translate.instant('labels.email-req'),
      });
      this.error = 1;
    } else if (this.myform.value.password_confirmation!= null &&this.myform.value.password != this.myform.value.password_confirmation) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: this.translate.instant('labels.password-req'),
      });
      this.error = 1;
    }else this.error = 0;

    if (this.error != 1) {
      this.formStatus.onFormSubmitting();
      this.authService
        .getregister(this.myform)
        .pipe(take(1))
        .subscribe({
          next:(val: any) => {
          this.aux = true;
          localStorage.setItem(offlinekeys.dev.ACCESS_TOKEN, val.data.token);
          
          if (this.aux == true) {
            this.messageService.add({
              severity: 'success',
              summary: 'success',
              detail: this.translate.instant('labels.success'),
            });
            this.router.navigate([this.endpoint_url]);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'error',
            });
          }
        },
        error: (errorResponse: HttpErrorResponse) => {
          const messages = extractErrorMessagesFromErrorResponse(errorResponse);
          this.formStatus.onFormSubmitResponse({
            success: false,
            messages: messages,
          });
          for (let error of this.formStatus.errors) {
           
            if(error=='{"email":["The email must be a valid email address."]}'){
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'the email must be a valid email adress',
              });
            }else{
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'the email is taken',
              });
            }
            
           
          }
        },
      });
    }
  }
  navigate() {
    this.router.navigateByUrl(this.route);
  }
}

import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersManagementRouting } from './users-managements.routing';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from 'src/app/app.module';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonModule } from 'primeng/button';
import { WidgetsModules } from 'src/app/widgets/login-header/widgets.module';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    WidgetsModules,
    ToastModule,
    RippleModule,
    MatGridListModule,
    CommonModule,
    MatCheckboxModule,
    CheckboxModule,
    ButtonModule,
    RouterModule,
    UsersManagementRouting,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    PasswordModule,
    RadioButtonModule,
    InputTextModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
})
export class UsersManagementModule {}

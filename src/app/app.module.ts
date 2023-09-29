import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersManagementModule } from './modules/users-managements/users-management.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state-management /users/users.action';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { TabViewModule } from 'primeng/tabview';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import TokenInterceptor from './apis/token-interceptor.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
export function initLangage(translateService: TranslateService) {
  translateService.addLangs(['en', 'es']);
  translateService.setDefaultLang('es');
  return () =>
    new Promise((resolve, reject) => {
      translateService.use('es');

      resolve(null);
    });
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersManagementModule,
    DashboardModule,
    StoreModule.forRoot({ usersSession: userReducer }),
    HttpClientModule,
    AutoCompleteModule,
    TabViewModule,
    ClickOutsideModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initLangage,
      multi: true,
      deps: [TranslateService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

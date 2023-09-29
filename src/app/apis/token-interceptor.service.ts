import { TranslateService } from '@ngx-translate/core';
import { Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import offlinekeys from 'src/app/config/offlinekeys.json';
import { pipe } from 'rxjs';
@Injectable()
export default class TokenInterceptorService implements HttpInterceptor {
  private authSessionRepository: Observable<any> ;

  constructor(
    public router: Router
  ) 
  {}

  private static getRequestWithAuthorizationHeaders(
    request: HttpRequest<any>,
    accessToken: string
  ): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken} `,
      },
    });
  }

  private static performRequestWithAuthorization(
    request: HttpRequest<any>,
    next: HttpHandler,
    accessToken: string
  ): Observable<HttpEvent<any>> {
    const authorizedRequest =
      TokenInterceptorService.getRequestWithAuthorizationHeaders(request, accessToken);
    return next.handle(authorizedRequest);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authSessionRepository =of(localStorage.getItem(offlinekeys.dev.ACCESS_TOKEN))
    if (
      request.url.includes('/auth/token')
    ) {
      return next.handle(request);
    }

    return this.authSessionRepository
      .pipe(
        switchMap((token: string) =>{
        
          return TokenInterceptorService.performRequestWithAuthorization(request, next, token)
        })
      )
      .pipe(
        tap((event) => {
          if (event instanceof HttpErrorResponse) {
            
          }
        })

      );
  }
}
import {enableProdMode, importProvidersFrom} from '@angular/core';


import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {HttpIntercepterBasicAuthService} from './app/service/http/http-intercepter-basic-auth.service';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true},
    provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch(err => console.error(err));

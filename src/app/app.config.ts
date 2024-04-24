import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import {appHttpInterceptor} from "./services/app-http.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withInterceptors([appHttpInterceptor])),ReactiveFormsModule
  ]
};

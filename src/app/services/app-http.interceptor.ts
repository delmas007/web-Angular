import { HttpInterceptorFn } from '@angular/common/http';
import {AppStateService} from "./app-state.service";
import {finalize} from "rxjs";
import {inject} from "@angular/core";

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  let a = inject(AppStateService);
  a.status = 'LOADING';
  let reqUrl = req.clone({
    // headers : req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    // headers : req.headers.set('Authorization', 'Bearer JWT_TOKEN')
  })
  return next(reqUrl).pipe(
    finalize(() => {
      a.status = 'LOADED';
    })
  );
};

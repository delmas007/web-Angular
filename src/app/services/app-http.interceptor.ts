import { HttpInterceptorFn } from '@angular/common/http';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  let reqUrl = req.clone({
    // headers : req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    headers : req.headers.set('Authorization', 'Bearer JWT_TOKEN')
  })
  return next(reqUrl);
};

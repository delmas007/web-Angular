import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from "../services/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  constructor(private appStateService: AppStateService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.appStateService.authState.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}

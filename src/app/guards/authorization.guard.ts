import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from "../services/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {
  constructor(private appStateService: AppStateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.appStateService.authState.role.includes('ADMIN')) {
      return true;
    } else {
      return false;
    }
  }
}

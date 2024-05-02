import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Routes} from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from "../services/app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {
  constructor(private appStateService: AppStateService,private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.appStateService.authState.role.includes(route.data['roles'])) {
      return true;
    } else {
        this.router.navigateByUrl("/admin/notAuthorized");
      return false;
    }
  }
}

import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AppStateService} from "../services/app-state.service";

inject(AppStateService)
export const authenticationGuard: CanActivateFn = (route, state) => {
  return true;
};

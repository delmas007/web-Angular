import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public status : String = '';
  public errorMessage : String = '';

  // public authState : any = {
  //   isAuthenticated : false,
  //   username : undefined,
  //   role : undefined,
  //   token : undefined
  // }
  constructor() { }

  // public setAuthState(state : any){
  //   this.authState = {...this.authState, ...state};
  // }


}

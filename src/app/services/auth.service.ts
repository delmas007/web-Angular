import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {AppStateService} from "./app-state.service";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient,private appState: AppStateService) { }

  async login(username: string, password: string){
    let user:any = await firstValueFrom(this.http.get('http://localhost:8081/users/'+username));
    console.log(password);
    console.log(user);
    console.log(atob(user.password));
    if (password == atob(user.password)){
      let decodedJwt : any = jwtDecode(user.token);
      console.log(decodedJwt.sub);
      this.appState.setAuthState({
        isAuthenticated: true,
        username: decodedJwt.sub,
        role: decodedJwt.roles,
        token: user.token
      });
      console.log(this.appState.authState);
      return Promise.resolve(true);
      } else {
        return Promise.reject("Bad credentials");
      }
  }
}



import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState : any = {
    isAuthenticated : false,
    username : undefined,
    role : undefined,
    token : undefined
  }

  constructor( private http:HttpClient) {
    this.loadToken();
  }

  async login(username: string, password: string){
    let user:any = await firstValueFrom(this.http.get('http://localhost:8081/users/'+username));
    console.log(password);
    console.log(user);
    console.log(atob(user.password));
    if (password == atob(user.password)){
      let decodedJwt : any = jwtDecode(user.token);
      localStorage.setItem('token', user.token);
      this.loadToken()
      return Promise.resolve(true);
      } else {
        return Promise.reject("Bad credentials");
      }
  }

  loadToken() {
    const token = localStorage!.getItem('token');
    if (token) {
      console.log("Token found")
      const decodedJwt: any = jwtDecode(token);
      this.authState={
        isAuthenticated: true,
        username: decodedJwt.sub,
        role: decodedJwt.roles,
        token: token
      };
    }
  }
  public setAuthState(state : any){
    this.authState = {...this.authState, ...state};
  }
}



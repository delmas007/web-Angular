import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AppStateService} from "../services/app-state.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actions : Array<any> = [
    { title : 'Home' , routes : '/admin/home' , icon :'bi-house'},
    { title : 'Products' , routes : '/admin/products' , icon :'bi-search'},
    { title : 'New products' , routes : '/admin/newProduct' , icon :'bi-plus-circle'}
  ]
  currentAction : any;

  constructor(public state : AppStateService,private router:Router,public authService: AuthService) {
  }

  setCurrentAction (action : any){
    this.currentAction=action;
  }

  // logout() {
  //   this.state.authState = {}
  //   this.router.navigate(['/login']);
  //   console.log(this.state.authState);
  // }
  logout() {
    localStorage.removeItem('token');  // Effacer le token lors de la déconnexion
    this.authService.setAuthState({
      isAuthenticated: false,
      username: undefined,
      roles: undefined,
      token: undefined
    });
    this.router.navigate(['/login']);
  }
}

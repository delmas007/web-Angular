import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

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
    { title : 'Home' , routes : '/home' , icon :'bi-house'},
    { title : 'Products' , routes : '/admin/products' , icon :'bi-search'},
    { title : 'New products' , routes : '/admin/newProduct' , icon :'bi-plus-circle'}
  ]
  currentAction : any;

  constructor(public state : AppStateService){
  }

  setCurrentAction (action : any){
    this.currentAction=action;
  }
}

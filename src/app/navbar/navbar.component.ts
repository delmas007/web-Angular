import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actions : Array<any> = [
    { title : 'Home' , routes : '/home' , icon :'bi-house'},
    { title : 'Products' , routes : '/products' , icon :'bi-search'},
    { title : 'New products' , routes : '/newProduct' , icon :'bi-plus-circle'}
  ]
  currentAction : any;

  setCurrentAction (action : any){
    this.currentAction=action;
  }
}

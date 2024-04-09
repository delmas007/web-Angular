import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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

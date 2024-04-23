import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AppErrorsComponent} from "./app-errors/app-errors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, DashboardComponent, NavbarComponent, AppErrorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}

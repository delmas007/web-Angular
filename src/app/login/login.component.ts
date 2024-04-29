import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage: undefined;
  constructor(private fb:FormBuilder, private authService : AuthService,private router: Router) {
  }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
      username: this.fb.control(""),
      password: this.fb.control("")
    });
  }


  handleLogin() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.authService.login(username, password)
      .then(() => {
        this.router.navigateByUrl("/admin")
      })
      .catch(err => {
        this.errorMessage = err;
      });
    }

}

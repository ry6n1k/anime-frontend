import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  login = '';
  password = '';

  constructor(private authService: AuthService) {}

  Login() {
    console.log('you are logging in');
    this.authService.login(this.login, this.password);
  }

  ngOnInit(): void {}
}

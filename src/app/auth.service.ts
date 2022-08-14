import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'https://localhost:3000/auth';
  //token;

  constructor(private http: HttpClient, private router: Router) {}

  login(login: string, password: string) {
    this.http
      .post(this.uri + '/login', { login: login, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}

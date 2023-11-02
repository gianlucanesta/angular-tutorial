import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  isAdmin = true;

  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQ79Es6mqwRCXxHpsmm0Wi8zI5aYeZOfI';

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  signUp(body: {}) {
    return this.http.post(this.url, body);
  }
}

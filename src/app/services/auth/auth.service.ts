import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  isAdmin = true;
  APIKey = 'AIzaSyBQ79Es6mqwRCXxHpsmm0Wi8zI5aYeZOfI';
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`;
  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`;
  user: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpURL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  signIn(email: string, password: string) {
    return this.http
      .post(this.signInURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((error) => {
          console.error('Error in signIn:', error);
          throw error;
        }),
        tap((response: any) => {
          console.log('Response from signIn:', response);
          if (
            response &&
            response.expiresIn &&
            response.email &&
            response.localId &&
            response.idToken
          ) {
            this.createUser(
              response.email,
              response.localId,
              response.idToken,
              new Date(new Date().getTime() + response.expiresIn * 1000)
            );
          }
        })
      );
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/signin']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient, private authservice: AuthService) {}

  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }

  getPersone(url: string) {
    const authToken = this.authservice.user?.token ?? 'DEFAULT_TOKEN';
    return this.http.get(`${url}?auth=${authToken}`);
  }

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }

  patchPersona(url: string, id: string, body: {}) {
    return this.http.patch(`${url}/${id}.json`, body);
  }
}

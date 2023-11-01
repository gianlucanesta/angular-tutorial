import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }

  getPersone(url: string) {
    return this.http.get(url);
  }
}

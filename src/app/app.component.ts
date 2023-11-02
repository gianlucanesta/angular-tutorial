import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './services/servizio-prova.service';
import { Observable, interval } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private servizioProva: ServizioProvaService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    // interval(1000).subscribe((numero) => {
    // console.log(numero);
    // });
    // console.log(interval(1000));
    // new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe((numero) => {
    //   console.log(numero);
    // });

    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!);
      this.authservice.createUser(
        user.email,
        user.id,
        user._token,
        user._expirationDate
      );
    }
  }
  onLogout() {
    this.authservice.logout();
  }
}

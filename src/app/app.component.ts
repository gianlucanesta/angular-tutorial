import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';

  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true },
    { nome: 'marco', cognome: 'verdi', isOnline: true },
    { nome: 'anna', cognome: 'neri', isOnline: false },
  ];

  isVisible = true;
  // numero = 3;
  stringa = 'topolino';

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onClick(event: Event) {
    this.title = 'ho cliccato sul bottone';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';

  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: true, color: 'red' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'orange' },
  ];

  btnClick() {
    this.persone = [
      { nome: 'gianluca', cognome: 'rossi', isOnline: true, color: 'blue' },
      { nome: 'gianmarco', cognome: 'verdi', isOnline: true, color: 'red' },
      { nome: 'gianpiero', cognome: 'neri', isOnline: false, color: 'orange' },
    ];
  }

  isVisible = true;
  // numero = 3;
  stringa = 'topolino';

  color = 'orange';

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onClick(event: Event) {
    this.title = 'ho cliccato sul bottone';
  }

  getColor() {
    return 'green';
  }
}

import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  colore = '';

  numero = 5.98797;

  title = 'angular-tutorial';

  oggi = Date.now();

  // persone = [
  //   { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
  //   { nome: 'marco', cognome: 'verdi', isOnline: true, color: 'red' },
  //   { nome: 'anna', cognome: 'neri', isOnline: false, color: 'orange' },
  // ];
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log('appComponent', this.servizioProva.persone);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: true, color: 'red' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'orange' },
  ];

  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersona(index: number) {
    return this.persone[index];
  }
}

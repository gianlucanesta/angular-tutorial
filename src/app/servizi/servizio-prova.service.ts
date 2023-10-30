import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  constructor() {}

  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: true, color: 'red' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'orange' },
  ];
}

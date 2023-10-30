import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService) {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('provaComponent', this.servizioProva.persone);
  }
}

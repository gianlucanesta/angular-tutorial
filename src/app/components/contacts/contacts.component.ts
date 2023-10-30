import { ServizioProvaService } from './../../servizi/servizio-prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  persone: any;

  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
  }
}

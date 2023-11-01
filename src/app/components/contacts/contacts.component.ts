import { FirebaseService } from 'src/app/services/firebase.service';
import { ServizioProvaService } from '../../services/servizio-prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  persone: any;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone();
    this.firebase
      .getPersone(
        'https://angular-course-9b140-default-rtdb.europe-west1.firebasedatabase.app/persone.json'
      )
      .subscribe((data: any) => {
        this.persone = Object.keys(data).map((key) => {
          return data[key];
        });
        console.log(this.persone);
      });
  }
}

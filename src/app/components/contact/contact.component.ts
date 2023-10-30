import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  persone: any;
  persona: any;

  isProfile?: boolean;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone();
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.servizioProva.getPersona(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
      // console.log(this.persone);
      // console.log(this.route.snapshot.paramMap.get('id'));
    } else {
      this.isProfile = false;
      this.persone = this.servizioProva.getPersone();
    }

    // console.log(this.isProfile);
  }
}

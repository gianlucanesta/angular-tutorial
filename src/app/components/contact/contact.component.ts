import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  id!: number;
  persona: any;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.persona = this.servizioProva.getPersona(this.id);
    });
  }
}

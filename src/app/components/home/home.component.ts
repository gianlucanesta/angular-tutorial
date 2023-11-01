import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  homeform!: FormGroup;

  sottoscrizione: any;

  url =
    'https://angular-course-9b140-default-rtdb.europe-west1.firebasedatabase.app/persone';

  completeUrl(url: string) {
    return this.url + '.json';
  }

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    // Subscriber
    this.sottoscrizione = interval(1000).subscribe((numero) => {
      // console.log(numero);
    });

    // Reactive Form
    this.homeform = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
  }
  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe();
  }
  onSubmit(): void {
    // console.log(this.homeform.value.nome, this.homeform.value.email);

    //Firebase
    this.firebase
      .insertPersona(this.completeUrl(this.url), {
        nome: this.homeform.value.nome,
        email: this.homeform.value.email,
      })
      .subscribe((data) => {
        console.log(Object.values(data));
      });
  }
  onDeletePersona() {
    this.firebase
      .deletePersona(this.url, '-NiAscrzFxJJ58N7-3yw')
      .subscribe((data) => {
        console.log(data);
      });
  }
  onPatchPersona() {
    this.firebase
      .patchPersona(this.url, '-NiB1eU_I3bRkttfsKFd', {
        email: 'prova@prova.com',
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

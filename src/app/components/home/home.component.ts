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
    console.log(this.homeform.value.nome, this.homeform.value.email);

    //Firebase
    this.firebase
      .insertPersona(
        'https://angular-course-9b140-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
        { nome: this.homeform.value.nome, email: this.homeform.value.email }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}

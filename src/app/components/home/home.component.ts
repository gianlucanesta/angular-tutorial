import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sottoscrizione: any;
  constructor() {}

  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe((numero) => {
      // console.log(numero);
    });
  }
  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe();
  }
  onSubmit(form: NgForm): void {
    console.log(form);
  }
}

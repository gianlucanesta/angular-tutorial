import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tutorial';

  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: true, color: 'red' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'orange' },
  ];

  valore = 'ciao';

  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputSaluti);
  }

  onClick() {
    console.log(this.inputSaluti.nativeElement.value);
  }
}

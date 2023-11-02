import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  ngOnInit(): void {}

  // onSubmit(form: NgForm) {
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   // console.log(email, password);
  //   this.authservice.signIn(email, password).subscribe((data: any) => {
  //     const expirationDate = new Date(
  //       new Date().getTime() + data.expiresIn * 1000
  //     );
  //     console.log(
  //       '🚀 ~ file: signin.component.ts:22 ~ SigninComponent ~ this.authservice.signIn ~ expirationDate:',
  //       expirationDate
  //     );

  //     // console.log(email, password);
  //     // console.log(data);
  //     console.log('Data expirationDate:', data.expirationDate);
  //     this.authservice.createUser(
  //       data.email,
  //       data.localId,
  //       data.idToken,
  //       data.expirationDate
  //     );
  //     localStorage.setItem('user', JSON.stringify(this.authservice.user));
  //     console.log(this.authservice.user);
  //   });
  //   form.reset();
  // }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authservice.signIn(email, password).subscribe((data: any) => {
      if (data && typeof data.expiresIn === 'string') {
        const expiresInNumber = parseInt(data.expiresIn, 10);
        if (!isNaN(expiresInNumber)) {
          const expirationDate = new Date(
            new Date().getTime() + expiresInNumber * 1000
          );

          console.log('Data expirationDate:', expirationDate);

          this.authservice.createUser(
            data.email,
            data.localId,
            data.idToken,
            expirationDate
          );
          localStorage.setItem('user', JSON.stringify(this.authservice.user));
          console.log(this.authservice.user);
        } else {
          // Handle the case where expiresInNumber is NaN (Not-a-Number)
        }
      } else {
        // Handle the case where data.expiresIn is not a string or data is not available
      }
    });

    form.reset();
  }
}

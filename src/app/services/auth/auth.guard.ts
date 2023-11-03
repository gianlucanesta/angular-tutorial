import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authservice.isAuthenticated()) {
      return true;
      this.router.navigate(['/homepage']);
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
    // return this.authservice.isAuthenticated();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.authservice.isRoleAdmin();
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

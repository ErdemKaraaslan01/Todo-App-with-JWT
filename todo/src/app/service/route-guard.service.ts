import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {BasicAuthenticationService} from "./basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private basicAuthentcationService: BasicAuthenticationService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.basicAuthentcationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}

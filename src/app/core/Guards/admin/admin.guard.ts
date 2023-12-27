import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CoreService } from '../../services/core.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private _router: Router, private core: CoreService) {
    core.getProfile();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    debugger;
    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('role') == 'admin'
    ) {
      return true;
    } else {
      this._router.navigate(['/core']);
      return false;
    }
  }
}

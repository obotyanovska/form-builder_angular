import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
  
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private _router: Router) { }
  
  public canActivate(): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } 
      return this._router.createUrlTree(['/login']);;
  }
}

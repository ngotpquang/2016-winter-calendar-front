import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean{
    if (this.userService.isLoggedIn()){
      return true
    }
    this.userService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}

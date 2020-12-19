import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth-service.service';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user-services/user-service.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      this.userService.authNavStatusSource.next(false);
      return false;
    }
    //this.router.navigate(['home']);
    this.userService.authNavStatusSource.next(true);
    return true;
  }
}

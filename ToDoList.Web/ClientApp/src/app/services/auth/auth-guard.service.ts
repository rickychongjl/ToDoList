import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router, CanActivate } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

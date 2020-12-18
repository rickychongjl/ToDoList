import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authNavStatusSource = new BehaviorSubject<boolean>(true);
  authNavStatus$ = this.authNavStatusSource.asObservable();

  constructor(private authService: AuthService) {
    //if (this.authService.isAuthenticated()){
    //  this.authNavStatusSource.next(true);
    //}
  }

  public logout() {
    this.authService.clearToken();
    this.authNavStatusSource.next(false);
  }
}

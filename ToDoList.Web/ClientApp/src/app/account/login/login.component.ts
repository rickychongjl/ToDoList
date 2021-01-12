import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/account/login/models/auth-response.model';
import { LoginCredentials } from 'src/app/account/login/models/login-credentials.model';
import { UserService } from '../../shared/services/user-services/user-service.service';
import { AuthService } from '../../shared/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: LoginCredentials = new LoginCredentials();
  public results: AuthResponse = new AuthResponse();

  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private router: Router,
    private accountService: AccountService) {  }
 
  ngOnInit() {
    //Special case where we call isAuthenticated not through canActivate, hence we need to broadcast authNavStatus state
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
      this.userService.authNavStatusSource.next(true);
    }else{
      this.router.navigate(['/account/login']);
      this.userService.authNavStatusSource.next(false);
    }
  }

  public login() {
    this.accountService.login(this.model).subscribe(result => {
      this.results = result;
      if (this.results.isAuthentic) {
        localStorage.setItem('id_token', this.results.token);
        this.userService.authNavStatusSource.next(true);
        this.router.navigate(['home']);
      }
      this.model = new LoginCredentials();
    });
  }
}

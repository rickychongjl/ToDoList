import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from 'src/app/account/login/models/auth-response.model';
import { LoginCredentials } from 'src/app/account/login/models/login-credentials.model';
import { UserService } from '../../shared/services/user-services/user-service.service';
import { AuthService } from '../../shared/services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: LoginCredentials = new LoginCredentials();
  public results: AuthResponse = new AuthResponse();

  constructor(private http: HttpClient, private userService: UserService, private authService: AuthService, private router: Router) {  }
 
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

  public login() {
    return this.http.post<AuthResponse>('api/home/login', this.model).subscribe(result => {
      this.results = result;
      if (this.results.isAuthentic){
        localStorage.setItem('id_token', this.results.token);
        this.userService.authNavStatusSource.next(true);
        this.router.navigate(['home']);
      }
      this.model = new LoginCredentials();
    });
  }
}
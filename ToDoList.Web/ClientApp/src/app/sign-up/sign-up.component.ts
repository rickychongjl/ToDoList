import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { SignUpDetails } from './models/sign-up-details.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user: SignUpDetails;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
    } else {
      this.user = new SignUpDetails();
    }
  }

  public signUp() {
    if (this.user.confirmPassword === this.user.details.password) {
      //make sign up request
      return this.http.post<any>('/api/home/sign-up', this.user.details).subscribe(
        result => {
          console.log(result);
        }
      );
    }
  }
}

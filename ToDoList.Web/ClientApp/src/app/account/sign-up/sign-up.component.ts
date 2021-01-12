import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { SignUpDetails } from './models/sign-up-details.model';
import { UserService } from 'src/app/shared/services/user-services/user-service.service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user: SignUpDetails;

  constructor(
    private authService: AuthService, 
    private userService: UserService, 
    private router: Router, 
    private accountService: AccountService
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
      this.userService.authNavStatusSource.next(true);
    } else {
      this.user = new SignUpDetails();
      this.userService.authNavStatusSource.next(false);
    }
  }

  public signUp() {
    if (this.user.confirmPassword === this.user.details.password) {
      //make sign up request
      this.accountService.signUp(this.user.details).subscribe(result => {
        console.log(result);
        this.router.navigate['login'];
      });
    }
  }
}

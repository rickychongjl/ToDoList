import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserService } from '../services/user-services/user-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent{
  isExpanded = false;
  public status: boolean = true;

  constructor(private auth: AuthService, private userService: UserService) {
    this.userService.authNavStatus$.subscribe(isAuthenticated => {
      this.status = isAuthenticated;
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    this.userService.logout();
  }
}

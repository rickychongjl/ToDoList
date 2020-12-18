import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    
    if (!token) {
      return false;
    }
    //var result = !this.jwtHelper.isTokenExpired(token);
    //var currentTime = Date.now();
    //if(token.exp)
    return true;
  }

  public clearToken() {
    localStorage.removeItem('id_token');
  }
}

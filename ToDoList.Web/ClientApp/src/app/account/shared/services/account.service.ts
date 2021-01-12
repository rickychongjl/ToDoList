import { Injectable } from '@angular/core';
import { BaseUrlSettingsService } from 'src/app/shared/services/url/base-url-settings.service';
import { LoginCredentials } from 'src/app/account/login/models/login-credentials.model';
import { AuthResponse } from 'src/app/account/login/models/auth-response.model';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from 'src/app/shared/models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private baseUrlSettings: BaseUrlSettingsService,
    private http: HttpClient
  ) { }

  private baseUrl = this.baseUrlSettings.getBaseUrl();

  public login(model: LoginCredentials){
    return this.http.post<AuthResponse>(this.baseUrl+'login', model);
  }

  public signUp(model: UserDetails){
    return this.http.post<boolean>(this.baseUrl+'login', model);
  }
}

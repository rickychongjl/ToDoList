import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserItem } from 'src/app/login/models/user-item.model';
import { LoginCredentials } from 'src/app/login/models/login-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public model: LoginCredentials = new LoginCredentials();
  public results: UserItem = new UserItem();

  constructor(private http: HttpClient) {  }
 
  ngOnInit() {
  }

  public getContent() {
    return this.http.post<UserItem>('api/home/user', this.model).subscribe(data => {
      this.results = data;
    });
  }
}

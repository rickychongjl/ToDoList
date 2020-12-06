import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserItem } from 'src/app/login/models/user-item.model';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  public results: UserItem;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onClick() {
    return this.http.get<UserItem>('api/home').subscribe(result => {
      this.results = result;
    });
  }
}

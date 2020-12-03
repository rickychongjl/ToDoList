import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  public results: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get<any>('api/home/', { headers: {Authorization: Bearer } }).subscribe(result => {
      this.results = result;
    });
  }

}

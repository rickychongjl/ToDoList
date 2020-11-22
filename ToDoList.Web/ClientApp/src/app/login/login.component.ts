import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public result: string;

  constructor(private http: HttpClient) {  }
 
  ngOnInit() {
  }

  public getContent() {
    this.http.get<any>('api/home/atlas').subscribe(data => {
      this.result = data;
    });
    
  }
}

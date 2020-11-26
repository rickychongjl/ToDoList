import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LoginCredentials } from '../login-credentials.model';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {
  @Input() public model: LoginCredentials;
  @Output() public modelChange: EventEmitter<LoginCredentials> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public getContent() {
    this.modelChange.emit(this.model);
  }
}

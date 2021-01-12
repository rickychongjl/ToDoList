import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlSettingsService {

  constructor() { }

  public getBaseUrl(){
    return "api/home/";
  }
}

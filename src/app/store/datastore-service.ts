import { Injectable } from '@angular/core';
import {LoginData} from '../business-layer/models/LoginData';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private loginData: LoginData | null = null;

  setLoginData(token: LoginData) {
    this.loginData = token;
    token.access_token?localStorage.setItem('access_token', token.access_token):null;
    token.role?localStorage.setItem('role',token.role):null;
  }

  getLoginData(): LoginData | null {
    return this.loginData || {access_token:localStorage.getItem('access_token'),role:localStorage.getItem('role')};
  }

  clearAccessToken() {
    this.loginData = null;
    localStorage.removeItem('access_token');
  }

}

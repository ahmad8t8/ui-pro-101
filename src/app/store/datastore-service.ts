import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private accessToken: string | null = null;

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('access_token', token);
  }

  getAccessToken(): string | null {
    return this.accessToken || localStorage.getItem('access_token');
  }

  clearAccessToken() {
    this.accessToken = null;
    localStorage.removeItem('access_token');
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpContext} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RETRY_COUNT, SKIP_AUTH} from '../../interceptors/skip-auth.token';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    const context=new HttpContext().set(SKIP_AUTH, true)
    context.set(RETRY_COUNT, 3);

    return this.http.post(`${this.baseUrl}/login`, credentials,{ context: context });
  }
}

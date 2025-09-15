import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DatastoreService} from '../../../store/datastore-service';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private dataStore = inject(DatastoreService);

  private baseUrl = 'http://localhost:8080/api/users';

  private getAuthHeaders(): HttpHeaders {
    const token = this.dataStore.getAccessToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, { headers: this.getAuthHeaders() });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user, { headers: this.getAuthHeaders() });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user, { headers: this.getAuthHeaders() });
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}

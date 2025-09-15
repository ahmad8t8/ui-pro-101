import {inject, Injectable} from '@angular/core';
import {AuthorizationService} from '../../data-layer/api-services/authorization-service';
import {DatastoreService} from '../../store/datastore-service';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../error-handler/service/error-handler-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationController {
  private errorHandler = inject(ErrorHandlerService);  // ✅
  constructor(
    private router:Router,
    private authService: AuthorizationService,
    private dataStore: DatastoreService
  ) {}

  login1(credentials: { username: string; password: string }): Observable<any> {
    return this.authService.login(credentials).pipe(
      tap(response => {
        if (response.access_token) {
          this.dataStore.setAccessToken(response.access_token);
        }
      })


    );
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.authService.login(credentials).pipe(
      tap(response => {
        if (response.access_token) {
          this.dataStore.setAccessToken(response.access_token);

          // ✅ redirect to smart feature (e.g., users list)
          this.router.navigate(['/user']);
        }
      }),
      catchError(err => {
        this.errorHandler.handleError(err);   // central error handling
        return throwError(() => err);
      })
    );
  }
}

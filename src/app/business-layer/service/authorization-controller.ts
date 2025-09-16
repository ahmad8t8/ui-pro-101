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
  private errorHandler = inject(ErrorHandlerService);
  private router = inject(Router);
  private dataStore = inject(DatastoreService);
  private authService = inject(AuthorizationService);

  constructor() {
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.authService.login(credentials).pipe(
      tap(response => {
        if (response.access_token) {
          this.dataStore.setAccessToken(response.access_token);
          this.router.navigate(['/users']);
        }
      }),
      catchError(err => {
        this.errorHandler.handleError(err);
        return throwError(() => err);
      })
    );
  }
}

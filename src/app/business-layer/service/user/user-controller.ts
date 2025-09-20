import {inject, Injectable} from '@angular/core';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {User} from '../../models/user';
import {UserService} from '../../../data-layer/service/user/user-service';
import {ErrorHandlerService} from '../../../error-handler/service/error-handler-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserController {
  private userService = inject(UserService);

  private errorHandler = inject(ErrorHandlerService);
  private router = inject(Router);

  getAllUsers(): Observable<User[]> {
    return this.userService.getUsers();
  }

  // async getUserById(id: number): Promise<User | null> {
  //   try {
  //     return await firstValueFrom(this.userService.g(id));
  //   } catch (err) {
  //     console.error(`[UserController] Failed to fetch user with id ${id}`, err);
  //     return null;
  //   }
  // }

  getUser(id: string): Observable<User> {
    return this.userService.getUser(id).pipe(
      tap(response => {
        if (response!=null) {
          // this.router.navigate(['/users']);
        }
      }),
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.userService.createUser(user).pipe(
      tap(response => {
        if (response!=null) {
          this.router.navigate(['/users']);
        }
      }),
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.userService.updateUser(user).pipe(
      tap(response => {
        if (response!=null) {
          this.router.navigate(['/users']);
        }
      }),
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.userService.deleteUser(id).pipe(
      tap(response => {
        if (response!=null) {
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

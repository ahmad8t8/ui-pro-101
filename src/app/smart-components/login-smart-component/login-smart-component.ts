import {Component, inject, Inject, OnDestroy} from '@angular/core';
import {AuthorizationController} from '../../business-layer/service/authorization-controller';
import {catchError, distinctUntilChanged, Subject, Subscription, takeUntil, throwError} from 'rxjs';

@Component({
  selector: 'app-login-smart-component',
  standalone: false,
  templateUrl: './login-smart-component.html',
  styleUrl: './login-smart-component.scss'
})
export class LoginSmartComponent implements  OnDestroy{
  public authController = inject(AuthorizationController);
  destroy$ = new Subject<boolean>();
  subs = new Subscription();
  constructor() {
  }

  onLogin(credentials: { username: string; password: string }) {
    this.subs.add(this.authController?.login(credentials).pipe(takeUntil(this.destroy$), distinctUntilChanged()).subscribe({
      next: (res: any) => console.log('Login success', res),
      error: (err: any) => console.error('Login failed', err)
    }));
  }

  // onLogin(credentials: { username: string; password: string }) {
  //   this.authController?.login(credentials).pipe(
  //     catchError(err => {
  //       this.errorHandler.handleError(err);
  //       return throwError(() => err);
  //     })
  //   ).subscribe((response: any) => {
  //     console.log(response)
  //
  //   });
  // }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.subs.unsubscribe();
  }
}

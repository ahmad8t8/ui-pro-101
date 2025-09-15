import { Component } from '@angular/core';
import {AuthorizationController} from '../../business-layer/service/authorization-controller';

@Component({
  selector: 'app-login-smart-component',
  standalone: false,
  templateUrl: './login-smart-component.html',
  styleUrl: './login-smart-component.scss'
})
export class LoginSmartComponent {
  constructor(private authController: AuthorizationController) {}

  onLogin(credentials: { username: string; password: string }) {
    this.authController.login(credentials).subscribe({
      next: (res) => console.log('Login success', res),
      error: (err) => console.error('Login failed', err)
    });
  }
}

import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username: string = '';
  password: string = '';
  constructor(public router: Router) {
  }
  @Output() loginEvent = new EventEmitter<{ username: string; password: string }>();
  onSubmit() {
    this.loginEvent.emit({ username: this.username, password: this.password });
  }
  goToSignup() {
    const uuid:String = crypto.randomUUID(); // generates a random UUID
    this.router.navigate(['/signup', uuid]);
  }

  randomUuid(): string {
    return crypto.randomUUID();
  }
}

import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet],
  templateUrl: './user.html'
})
export class User implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    // this.router.navigate(['']);
  }
}

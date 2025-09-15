import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.html',
  imports: [
    RouterLink
  ],
  styleUrl: './signup.scss'
})
export class Signup implements OnInit {
  uuid: string | null = null;
  private router = inject(ActivatedRoute);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.uuid = this.route.snapshot.paramMap.get('id');
  }

}

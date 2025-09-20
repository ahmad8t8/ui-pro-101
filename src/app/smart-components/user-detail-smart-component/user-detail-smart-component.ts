import {Component, inject, OnInit} from '@angular/core';
import {UserController} from '../../business-layer/service/user/user-controller';
import {User} from '../../business-layer/models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserDetail} from '../../view-layer/user-detail/user-detail';
import {DatastoreService} from '../../store/datastore-service';

@Component({
  selector: 'app-user-detail-smart-component',
  imports: [
    UserDetail

  ],
  templateUrl: './user-detail-smart-component.html',
  styleUrl: './user-detail-smart-component.scss'
})
export class UserDetailSmartComponent implements OnInit {
  constructor() {

    this.id= this.route.snapshot.paramMap.get('id');
  }
  private id: string | null=null;
  public user: User|null|undefined;
  ngOnInit() {
    if (this.id) {
      this.userController.getUser(this.id).subscribe((user: User) => {
        this.user=user;
      });
    }
  }

  userOutputHandler(user: User) {
    if(this.id) {
      this.onUpdate(user)
    }
    else{
      this.onCreate(user);
    }
  }

  private userController = inject(UserController);
  private router:Router=inject(Router);
  route: ActivatedRoute =inject(ActivatedRoute);


  onCreate(user: User) {
    this.userController.createUser(user).subscribe((user: User) => {
      this.router.navigate(['/users']);
    });
  }

  onUpdate(user: User) {
    this.userController.updateUser(user).subscribe((user: User) => {
      this.router.navigate(['/users']);
    });
  }

  onDelete(id: number) {
    this.userController.deleteUser(id).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}

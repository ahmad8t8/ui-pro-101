import {Component, inject, OnInit} from '@angular/core';
import {User} from '../../data-layer/service/user/user';
import {UserController} from '../../business-layer/service/user/user-controller';
import {UserListComponent} from '../../view-layer/user-list-component/user-list-component';

@Component({
  selector: 'app-user-list-smart-component',
  templateUrl: './user-list-smart-component.html',
  imports: [
    UserListComponent
  ],
  styleUrl: './user-list-smart-component.scss'
})
export class UserListSmartComponent implements OnInit {

  private userController = inject(UserController);

  users: User[] = [];

  ngOnInit() {
    this.userController.getAllUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  onCreate(user: User) {
    this.userController.createUser(user).subscribe((user: User) => {
      this.userController.getAllUsers().subscribe((res: User[]) => {
        this.users = res;
      });
    });
  }

  onUpdate(user: User) {
    this.userController.updateUser(user).subscribe((user: User) => {
      this.userController.getAllUsers().subscribe((res: User[]) => {
        this.users = res;
      });
    });
  }

  onDelete(id: number) {
    this.userController.deleteUser(id).subscribe(() => {
      this.userController.getAllUsers().subscribe((res: User[]) => {
        this.users = res;
      });
    });
  }
}

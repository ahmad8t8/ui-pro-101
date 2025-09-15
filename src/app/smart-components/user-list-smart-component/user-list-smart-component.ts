import {Component, inject, OnInit} from '@angular/core';
import {User} from '../../data-layer/service/user/user';
import {UserController} from '../../business-layer/service/user/user-controller';

@Component({
  selector: 'app-user-list-smart-component',
  standalone: false,
  templateUrl: './user-list-smart-component.html',
  styleUrl: './user-list-smart-component.scss'
})
export class UserListSmartComponent implements OnInit {

  private userController = inject(UserController);

  users: User[] = [];

  async ngOnInit(): Promise<void> {
    this.users = await this.userController.getAllUsers();
  }

  async onCreate(user: User) {
    await this.userController.createUser(user);
    this.users = await this.userController.getAllUsers();
  }

  async onUpdate(user: User) {
    await this.userController.updateUser(user);
    this.users = await this.userController.getAllUsers();
  }

  async onDelete(id: number) {
    await this.userController.deleteUser(id);
    this.users = await this.userController.getAllUsers();
  }
}

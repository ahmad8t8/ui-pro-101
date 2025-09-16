import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../data-layer/service/user/user';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.html',
  styleUrls: ['./user-list-component.scss']
})
export class UserListComponent {
  @Input() users: User[] = [];

  @Output() deleteUser = new EventEmitter<number>();
  @Output() updateUser = new EventEmitter<User>();
  @Output() addUser = new EventEmitter<void>();

  onDelete(id: number) {
    this.deleteUser.emit(id);
  }

  onUpdate(user: User) {
    this.updateUser.emit(user);
  }

  onAdd() {
    this.addUser.emit();
  }
}

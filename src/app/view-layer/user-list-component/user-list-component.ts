import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../business-layer/models/user';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.html',
  styleUrls: ['./user-list-component.scss']
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
      console.log("role data ",this.role);
  }
  @Input() users: User[] = [];
  @Input() role: string | null | undefined;
  @Output() deleteUser = new EventEmitter<any>();
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

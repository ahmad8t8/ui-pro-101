import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../data-layer/service/user/user';
import {UserService} from '../../../data-layer/service/user/user-service';

@Injectable({
  providedIn: 'root'
})
export class UserController {
  private userService = inject(UserService);


  getAllUsers(): Observable<User[]> {
    return this.userService.getUsers();
  }

  // async getUserById(id: number): Promise<User | null> {
  //   try {
  //     return await firstValueFrom(this.userService.g(id));
  //   } catch (err) {
  //     console.error(`[UserController] Failed to fetch user with id ${id}`, err);
  //     return null;
  //   }
  // }

  createUser(user: User): Observable<User> {
    return this.userService.createUser(user);
  }

  updateUser(user: User): Observable<User> {
    return this.userService.updateUser(user);
  }

  deleteUser(id: number): Observable<void> {
    return this.userService.deleteUser(id);
  }
}

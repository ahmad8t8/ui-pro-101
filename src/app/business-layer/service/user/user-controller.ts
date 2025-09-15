import {inject, Injectable} from '@angular/core';
import {catchError, firstValueFrom, Observable, tap, throwError} from 'rxjs';
import {User} from '../../../data-layer/service/user/user';
import {UserService} from '../../../data-layer/service/user/user-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserController {
  private userService = inject(UserService);
  private router = inject(Router);


  async getAllUsers(): Promise<User[]> {
    try {
      const users = await firstValueFrom(this.userService.getUsers());
      return users;
    } catch (err) {
      console.error('[UserController] Failed to fetch users', err);
      return []; // safe fallback
    }
  }

  // async getUserById(id: number): Promise<User | null> {
  //   try {
  //     return await firstValueFrom(this.userService.g(id));
  //   } catch (err) {
  //     console.error(`[UserController] Failed to fetch user with id ${id}`, err);
  //     return null;
  //   }
  // }

  async createUser(user: User): Promise<User | null> {
    try {
      return await firstValueFrom(this.userService.createUser(user));
    } catch (err) {
      console.error('[UserController] Failed to create user', err);
      return null;
    }
  }

  async updateUser(user: User): Promise<User | null> {
    try {
      return await firstValueFrom(this.userService.updateUser(user));
    } catch (err) {
      console.error('[UserController] Failed to update user', err);
      return null;
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      await firstValueFrom(this.userService.deleteUser(id));
      return true;
    } catch (err) {
      console.error(`[UserController] Failed to delete user with id ${id}`, err);
      return false;
    }
  }
}

import {Component, inject, OnInit} from '@angular/core';
import {User} from '../../business-layer/models/user';
import {UserController} from '../../business-layer/service/user/user-controller';
import {UserListComponent} from '../../view-layer/user-list-component/user-list-component';
import {DatastoreService} from '../../store/datastore-service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogBox} from '../../view-layer/shared/dialog-box/dialog-box';
import {NoopScrollStrategy} from '@angular/cdk/overlay';
import {take} from 'rxjs';

@Component({
  selector: 'app-user-list-smart-component',
  templateUrl: './user-list-smart-component.html',
  imports: [
    UserListComponent,
    MatDialogModule
  ],
  styleUrl: './user-list-smart-component.scss'
})
export class UserListSmartComponent implements OnInit {
  private userController = inject(UserController);
  public storeService = inject(DatastoreService);
  public router: Router = inject(Router);
  matDialog: MatDialog = inject(MatDialog);
  users: User[] = [];

  ngOnInit() {
    this.userController.getAllUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  addUserHandler() {
    console.log(this.router.url);
    this.router.navigateByUrl('users/create');
  }

  updateUserHandler(user: User) {
    this.router.navigate(['users/update', user.id]);
  }

  deleteUserHandler(id: number) {
    const dialogRef = this.matDialog.open(DialogBox, {
      width: '500px',
      disableClose: true,
      data: {
        dialogTitle: "Delete User",
        dialogDescription: "Are you sure you want to delete this user?",
        dialogType: "danger",
        eventCode: "Delete",
        eventData: "Delete User"
      },
      scrollStrategy: new NoopScrollStrategy()
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe(value => {
      if (value == "YES") {
        this.userController.deleteUser(id).subscribe(() => {
          this.userController.getAllUsers().subscribe((res: User[]) => {
            this.users = res;
          });
        })
      }
    });
  }


}

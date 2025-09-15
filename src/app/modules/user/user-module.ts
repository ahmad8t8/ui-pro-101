import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { UserListSmartComponent } from '../../smart-components/user-list-smart-component/user-list-smart-component';
import { UserListComponent } from '../../view-layer/user-list-component/user-list-component';


@NgModule({
  declarations: [
    UserListSmartComponent,
     UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserListComponent
  ]
})
export class UserModule { }

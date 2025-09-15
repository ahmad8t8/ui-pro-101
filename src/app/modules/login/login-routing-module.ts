import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Login} from '../../view-layer/login/login';
import {Signup} from '../../view-layer/signup/signup';
import {LoginSmartComponent} from '../../smart-components/login-smart-component/login-smart-component';
import {UserListSmartComponent} from '../../smart-components/user-list-smart-component/user-list-smart-component';
import {SignupSmartComponent} from '../../smart-components/signup-smart-component/signup-smart-component';

const routes: Routes = [
  {
    path: '', component: LoginSmartComponent
  },
  {
    path: 'login', component: Login
  },
  {
    path: 'user', component: UserListSmartComponent,
    children: [
      {path: 'address', component: Login},
      {path: 'error', component: Login, canDeactivate: []},
    ]
  },
  {
    path: 'signup', component: SignupSmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

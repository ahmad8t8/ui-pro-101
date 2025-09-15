import { Routes } from '@angular/router';
import {Signup} from './view-layer/signup/signup';

export const routes: Routes = [
  {path: '', loadChildren: () => import(`./modules/login/login-module`).then(m => m.LoginModule)},
  {path: 'login', loadChildren: () => import(`./modules/login/login-module`).then(m => m.LoginModule)},
  {path: 'signup/:id', loadComponent: () => import(`./view-layer/signup/signup`).then(c => c.Signup)},
  // { path: 'signup/:id', component: Signup }
  {path: 'user', loadChildren: () => import(`./modules/user/user-module`).then(m => m.UserModule)}


];

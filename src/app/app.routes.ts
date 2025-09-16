import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'login', loadChildren: () => import(`./modules/login/login-module`).then(m => m.LoginModule)},
  {path: 'users', loadChildren: () => import(`./modules/user/user-module`).then(m => m.UserModule)}
];

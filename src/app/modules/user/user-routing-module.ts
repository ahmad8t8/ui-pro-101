import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from '../../view-layer/user-list-component/user-list-component';

const routes: Routes = [

  {path: '',
  loadComponent: () =>
  import('../../view-layer/user-list-component/user-list-component')
    .then(m => m.UserListComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

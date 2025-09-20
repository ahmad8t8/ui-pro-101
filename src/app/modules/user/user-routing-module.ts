import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../modules/user/user').then(u => u.User),
    children: [
      {
        path: '',
        loadComponent: () => import('../../smart-components/user-list-smart-component/user-list-smart-component').then(u => u.UserListSmartComponent),
      },
      {
        path: 'create',
        loadComponent: () => import('../../smart-components/user-detail-smart-component/user-detail-smart-component').then(u => u.UserDetailSmartComponent),
      },
      {
        path: 'update/:id',
        loadComponent: () => import('../../smart-components/user-detail-smart-component/user-detail-smart-component').then(u => u.UserDetailSmartComponent),
      }
    ]
  }
  // {
  //   path: 'create',
  //   loadComponent: () => import('../../smart-components/user-detail-smart-component/user-detail-smart-component').then(u => u.UserDetailSmartComponent),
  // },
  // {
  //   path: 'update:id',
  //   loadComponent: () => import('../../smart-components/user-detail-smart-component/user-detail-smart-component').then(u => u.UserDetailSmartComponent),
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}

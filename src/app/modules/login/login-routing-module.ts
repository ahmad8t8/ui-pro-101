import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginSmartComponent} from '../../smart-components/login-smart-component/login-smart-component';
import {SignupSmartComponent} from '../../smart-components/signup-smart-component/signup-smart-component';

const routes: Routes = [
  {
    path: '', component: LoginSmartComponent
  },
  {
    path: 'signup', component: SignupSmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

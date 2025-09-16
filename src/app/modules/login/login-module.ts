import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing-module';
import {Login} from '../../view-layer/login/login';
import {SharedModule} from '../shared/shared-module';
import {LoginSmartComponent} from '../../smart-components/login-smart-component/login-smart-component';
import {SignupSmartComponent} from '../../smart-components/signup-smart-component/signup-smart-component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginSmartComponent,
    Login,
    SignupSmartComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: []
})
export class LoginModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing-module';
import { Login } from '../../view-layer/login/login';
import {SharedModule} from '../shared/shared-module';
import { Signup } from '../../view-layer/signup/signup';
import { LoginSmartComponent } from '../../smart-components/login-smart-component/login-smart-component';
import { SignupSmartComponent } from '../../smart-components/signup-smart-component/signup-smart-component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    Login,
    LoginSmartComponent,
    SignupSmartComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [

  ]
})
export class LoginModule { }

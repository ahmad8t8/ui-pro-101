import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Error} from '../../view-layer/error/error';


@NgModule({
  declarations: [
    Error
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error
  ]
})
export class SharedModule {
}

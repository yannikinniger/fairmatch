import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SignUpEmailPage} from './sign-up-email';

@NgModule({
  declarations: [
    SignUpEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpEmailPage),
  ],
})
export class SignUpEmailPageModule {


}

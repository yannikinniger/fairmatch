import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpEmail } from './sign-up-email';

@NgModule({
  declarations: [
    SignUpEmail,
  ],
  imports: [
    IonicPageModule.forChild(SignUpEmail),
  ],
})
export class SignUpEmailModule {


}

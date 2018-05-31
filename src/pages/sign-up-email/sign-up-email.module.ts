import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SignUpEmailPage} from './sign-up-email';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    SignUpEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpEmailPage),
    ComponentsModule,
  ],
})
export class SignUpEmailPageModule {


}

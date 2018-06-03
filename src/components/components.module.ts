import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {InputFieldComponent} from './input-field/input-field';
import { BottomButtonComponent } from './bottom-button/bottom-button';

@NgModule({
  declarations: [
    InputFieldComponent,
    BottomButtonComponent,
  ],
  imports: [IonicModule],
  exports: [
    InputFieldComponent,
    BottomButtonComponent,
  ]
})
export class ComponentsModule {
}

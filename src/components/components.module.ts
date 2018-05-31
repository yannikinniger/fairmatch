import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {InputFieldComponent} from './input-field/input-field';

@NgModule({
  declarations: [
    InputFieldComponent,
  ],
  imports: [IonicModule],
  exports: [
    InputFieldComponent,
  ]
})
export class ComponentsModule {
}

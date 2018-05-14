import {Component, Input} from '@angular/core';

/**
 * Generated class for the InputBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-box',
  templateUrl: 'input-box.html'
})
export class InputBoxComponent {

  @Input() name: string;
  text: string;

  constructor() {
    console.log('Hello InputBoxComponent Component');
    this.text = 'Hello World';
  }

}

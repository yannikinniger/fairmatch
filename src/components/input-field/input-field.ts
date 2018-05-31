import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: 'input-field.html'
})
export class InputFieldComponent {

  @Input() name: string;
  @Input() placeholder: string;
  @Input() type: string = 'text';
  @Input() model: string;
  @Output() modelChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

}

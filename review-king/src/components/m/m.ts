import { Component } from '@angular/core';

/**
 * Generated class for the MComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'm',
  templateUrl: 'm.html'
})
export class MComponent {

  text: string;

  constructor() {
    console.log('Hello MComponent Component');
    this.text = 'Hello World';
  }

}

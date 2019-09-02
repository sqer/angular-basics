import { Component } from '@angular/core';

@Component({
  selector: 'property-binding-example',
  templateUrl: './property-binding-example.component.html'
})
export class PropertyBindingExampleComponent {

  bob: Object;
  isBtnDisabled: boolean;
  url: string;

  constructor() {
    this.bob = {name: 'Uncle Bob', sex: 'M'};
    this.isBtnDisabled = true;
    this.url = 'http://braginteractive.com/wp-content/uploads/2015/12/meme-i-have-no-idea-what-i-am-doing.png'
  }

}


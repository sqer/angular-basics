import { Component } from '@angular/core';

@Component({
  selector: 'event-binding-example',
  templateUrl: './event-binding-example.component.html'
})
export class EventBindingExampleComponent {

  clickMsg: string = '';
  name: string = '';

  logClick() {
    console.log('logClick', Math.random());
  }

  // add click show message function

  logName(event: any) {
    console.log('logName', event.target.value);
  }

  // add change name function

}

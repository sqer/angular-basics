import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: 'hello-world.html'
})

export class HelloWorldComponent {

    name: string = "Tomasz";

    constructor() { }

}
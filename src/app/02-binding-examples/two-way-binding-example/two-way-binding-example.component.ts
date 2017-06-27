import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'two-way-binding-example',
    templateUrl: './two-way-binding-example.component.html'
})
export class TwoWayBindingExampleComponent implements OnInit {
    message: any;
    types: string[];

    ngOnInit(): void {
        this.types = [
            "Private",
            "Public",
            "Top secret"
        ];

        this.message = {
            text: "Imba!",
            type: this.types[0]
        };
    }

    changeText(text: string) {
        console.log(text);
        this.message.text = text;
    }
}

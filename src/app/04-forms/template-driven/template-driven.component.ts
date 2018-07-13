import { Component, ViewChild } from '@angular/core';
import { Survey } from '../survey';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
    selector: 'template-driven-form',
    templateUrl: './template-driven.component.html'
})

export class TemplateDrivenFormComponent {

    @ViewChild("sForm") surveyForm: NgForm;

    survey: Survey = new Survey();

    onSubmit(): void {
        
    }

}
import { Component, ViewChild } from '@angular/core';
import { Survey } from '../survey';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven.component.html'
})

export class TemplateDrivenFormComponent {

  @ViewChild('sForm', { static: false }) surveyForm: NgForm;

  survey: Survey = new Survey();

  onSubmit(): void {

  }

}

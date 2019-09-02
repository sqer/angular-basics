import { Component } from '@angular/core';
import { Survey } from '../survey';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive.component.html'
})

export class ReactiveFormComponent {

  survey: Survey;
  surveyGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.surveyGroup = this.fb.group({
      typescript: ['', Validators.required],
      angular: '',
      preferredLanguage: '',
      comment: ''
    });
  }

  onSubmit(): void {
    this.survey = this.surveyGroup.value;
  }

}

import { Component } from '@angular/core';
import { Survey } from '../survey';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive.component.html'
})

export class ReactiveFormComponent {

  survey: Survey;
  surveyGroup: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
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

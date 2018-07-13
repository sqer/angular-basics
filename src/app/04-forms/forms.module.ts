import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive/reactive.component';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsComponent
  ],
  declarations: [
    FormsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  providers: [
  ]
})
export class FormsExampleModule {
}

export {
  FormsComponent
}

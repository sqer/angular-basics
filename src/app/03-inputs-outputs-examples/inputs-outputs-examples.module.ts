import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { InputsOutputsExamplesComponent } from "./inputs-outputs-examples.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    InputsOutputsExamplesComponent,
  ],
  declarations: [
    ParentComponent,
    ChildComponent,
    InputsOutputsExamplesComponent
  ]
})
export class InputsOutPutsExamplesModule {
}
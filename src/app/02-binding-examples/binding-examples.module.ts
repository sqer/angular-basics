import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingExamplesComponent } from './binding-examples.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        BindingExamplesComponent
    ],
    declarations: [
        BindingExamplesComponent
    ]
})
export class BindingExamplesModule {
}

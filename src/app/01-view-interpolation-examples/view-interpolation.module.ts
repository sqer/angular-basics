import { NgModule } from '@angular/core';
import { ViewInterpolationComponent } from './view-interpolation.component';
import { HelloWorldComponent } from './hello-word/hello-world.component';

// TODO add correct imports to files
// TODO declare personal data component in module

@NgModule({
  exports: [
    ViewInterpolationComponent
  ],
  declarations: [
    ViewInterpolationComponent,
    HelloWorldComponent
  ]
})
export class ViewInterpolationModule {
}


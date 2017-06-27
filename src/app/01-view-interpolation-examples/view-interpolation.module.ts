import { NgModule } from '@angular/core';
import { ViewInterpolationComponent } from './view-interpolation.component';
import { HelloWorldComponent } from './hello-word/hello-world.component';

// TODO add imports

// TODO  make personal data component "visible" for module internals
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


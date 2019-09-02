import { NgModule } from '@angular/core';
//components
import { CFirstComponent } from './c-first/c-first.component';
// services
import { C1Service } from './shared/c1.service';

@NgModule({
  imports: [],
  exports: [
    CFirstComponent
  ],
  declarations: [
    CFirstComponent
  ],
  providers: [
    C1Service
  ]
})
export class CFeatureModule {
}

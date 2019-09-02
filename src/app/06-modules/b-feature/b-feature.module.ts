import { NgModule } from '@angular/core';
//components
import { BFirstComponent } from './b-first/b-first.component';
import { BSecondComponent } from './b-second/b-second.component';
// services
import { B1Service } from './shared/b1.service';
import { B2Service } from './shared/b2.service';

@NgModule({
  imports: [],
  exports: [
    BFirstComponent,
    BSecondComponent
  ],
  declarations: [
    BFirstComponent,
    BSecondComponent
  ],
  providers: [
    B1Service,
    B2Service
  ]
})
export class BFeatureModule {
}

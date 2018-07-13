import { NgModule } from '@angular/core';

// components
import { AFirstComponent } from "./a-first/a-first.component";
import { ASecondComponent } from "./a-second/a-second.component";

// services
import { A1Service } from "./shared/a1.service";
import { A2Service } from "./shared/a2.service";

@NgModule({
  imports: [],
  exports: [
    AFirstComponent,
    ASecondComponent,
  ],
  declarations: [
    AFirstComponent,
    ASecondComponent,
  ],
  providers: [
    A1Service,
    A2Service,
  ],
})
export class AFeatureModule {
}

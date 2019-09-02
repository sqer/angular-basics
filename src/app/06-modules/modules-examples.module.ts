import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// sub-modules
import { AFeatureModule } from './a-feature/a-feature.module';
import { BFeatureModule } from './b-feature/b-feature.module';
// components
import { ModulesExamplesComponent } from './modules-examples.component';
import { AlphaService } from './shared/alpha.service';
import { BetaService } from './shared/beta.service';
import { GammaService } from './shared/gamma.service';
import { CFeatureModule } from './c-feature/c-feature.module';

// services

@NgModule({
  imports: [
    CommonModule,
    // sub-modules
    AFeatureModule,
    BFeatureModule,
    CFeatureModule
  ],
  exports: [
    ModulesExamplesComponent
  ],
  declarations: [
    ModulesExamplesComponent
  ],
  providers: [
    AlphaService,
    BetaService,
    GammaService
  ]
})
export class ModulesExamplesModule {
}

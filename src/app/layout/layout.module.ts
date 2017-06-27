import { NgModule } from '@angular/core';
import { MainMenuModule } from "./main-menu/main-menu.module";

@NgModule({
  imports: [
    MainMenuModule
  ],
  exports: [
    MainMenuModule
  ]
})
export class LayoutModule {
}

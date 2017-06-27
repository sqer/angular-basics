import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ViewInterpolationModule } from './01-view-interpolation-examples/view-interpolation.module';
import { BindingExamplesModule } from './02-binding-examples/binding-examples.module';
import { InputsOutPutsExamplesModule } from './03-inputs-outputs-examples/inputs-outputs-examples.module';
import { TodoListModule } from './04-todos/todos.moudle';
import { ModulesExamplesModule } from './05-modules/modules-examples.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    ViewInterpolationModule,
    BindingExamplesModule,
    InputsOutPutsExamplesModule,
    TodoListModule,
    ModulesExamplesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

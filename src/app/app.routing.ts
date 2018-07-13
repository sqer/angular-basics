import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewInterpolationComponent } from './01-view-interpolation-examples/view-interpolation.component';
import { BindingExamplesComponent } from './02-binding-examples/binding-examples.component';
import { InputsOutputsExamplesComponent } from './03-inputs-outputs-examples/inputs-outputs-examples.component';
import { TodosComponent } from './05-todos/todos.component';
import { ModulesExamplesComponent } from './06-modules/modules-examples.component';
import { FormsComponent } from './04-forms/forms.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-interpolation-examples', component: ViewInterpolationComponent },
  { path: 'binding-examples', component: BindingExamplesComponent },
  { path: 'inputs-outputs-examples', component: InputsOutputsExamplesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'modules-examples', component: ModulesExamplesComponent }
];
export const routing = RouterModule.forRoot(routes);

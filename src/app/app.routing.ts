import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewInterpolationComponent } from './01-view-interpolation-examples/view-interpolation.component';
import { BindingExamplesComponent } from './02-binding-examples/binding-examples.component';
import { InputsOutputsExamplesComponent } from './03-inputs-outputs-examples/inputs-outputs-examples.component';
import { TodosComponent } from './04-todos/todos.component';
import { ModulesExamplesComponent } from './05-modules/modules-examples.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-interpolation-examples', component: ViewInterpolationComponent },
  { path: 'binding-examples', component: BindingExamplesComponent },
  { path: 'inputs-outputs-examples', component: InputsOutputsExamplesComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'modules-examples', component: ModulesExamplesComponent }
];
export const routing = RouterModule.forRoot(routes);

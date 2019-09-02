import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

import { TodosService } from './shared/todos.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    TodosComponent
  ],
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodoFormComponent,
    EditTodoComponent
  ],
  providers: [
    TodosService
  ]
})
export class TodoListModule {
}

export {
  TodosComponent
};

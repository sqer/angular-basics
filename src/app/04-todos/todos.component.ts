import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo';
import { TodosService } from './shared/todos.service';


@Component({
  selector: 'todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {

  allTodos: Todo[];
  currentlyEditedTodos: Todo[] = [];

  constructor(private todoService: TodosService) {
    this.allTodos = todoService.getAll();
    this.currentlyEditedTodos = todoService.getUnderEdit();
  }

  ngOnInit() {
  }

  createNew(event) {
  }

  remove(item: Todo) {
  }

  edit(item: Todo) {
  }

  update($event) {
  } 

  cancelEdit(todo:Todo) {

  }
}

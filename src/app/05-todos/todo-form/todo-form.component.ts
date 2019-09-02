import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';

const CLEAR_TODO: any = {
  title: '',
  description: ''
};

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

  submitClick = new EventEmitter<Todo>();

  newTodo: any = CLEAR_TODO;

  ngOnInit() {

  }

  submit() {
  }
}

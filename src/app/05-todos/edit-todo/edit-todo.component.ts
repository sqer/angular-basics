import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  @Input() todo: Todo;

  @Output() updateClick = new EventEmitter<any>();
  @Output() cancelClick = new EventEmitter<any>();

  editedTodo: Todo;

  ngOnInit() {
  }

  update() {
  }

  cancel() {
  }
}

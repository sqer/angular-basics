import { Injectable } from '@angular/core';

import { Todo } from "./todo";

@Injectable()
export class TodosService {

  todos: Todo[] = [
    { id: 100, isFinished: false, title: "Buy milk", description: "Buy milk 2%" },
    { id: 101, isFinished: false, title: "Buy butter", description: "3 cubes" },
    { id: 102, isFinished: false, title: "Buy bread" },
    { id: 103, isFinished: false, title: "Wash car" }
  ];

  editedTodos: Todo[] = [];

  constructor() { }

  getAll(): Todo[] {
    return this.todos;
  }

  getUnderEdit(): Todo[] {
    return this.editedTodos;
  }

  createNew(title: string, description: string) {
  }

  edit(todo: Todo){
    this.editedTodos.push(todo);
  }

  cancelEdit(todo: Todo){
  }

  update(orginalTodo: Todo, newTodo: Todo) {
  }

  remove(index: number) {
  }

}

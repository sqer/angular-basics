import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodosService } from '../shared/todos.service';

const CLEAR_TODO: any = {
    title: "",
    description: ""
}

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

 submitClick = new EventEmitter<Todo>();

    newTodo: any = CLEAR_TODO;

    constructor(todoService: TodosService) {
        //TODO inject TodosService
    }

    ngOnInit() {

    }

    submit() {
    }
}

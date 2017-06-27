import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodosService } from '../shared/todos.service';

@Component({
    selector: 'edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

    @Input() todo :Todo;

    @Output() updateClick = new EventEmitter<any>();
    @Output() cancelClick = new EventEmitter<any>();

    editedTodo:Todo;

    constructor(todoService: TodosService) {
        //TODO inject TodosService
    }

    ngOnInit() {
    }

    update() {
    }

    cancel(){
    }
}

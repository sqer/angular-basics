import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodosService } from '../shared/todos.service';

@Component({
    selector: 'todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

    todos: Todo[]= [];
    @Input() underEditTodos: Todo[];

    @Output() removeClick = new EventEmitter<Todo>();
    @Output() updateClick = new EventEmitter<Todo>();
    @Output() editClick = new EventEmitter<Todo>();
    @Output() cancelEditClick = new EventEmitter<Todo>();

    constructor(private todoService: TodosService) {
        //TODO inject TodosService
    }

    ngOnInit() {
    }

    isEdited(item: Todo): boolean {
        return false;
    }

    edit(item: Todo) {
    }

    update(updateParam: any) {
    }

    cancel(item: Todo) {
    }

    remove(item: Todo) {
    }
}

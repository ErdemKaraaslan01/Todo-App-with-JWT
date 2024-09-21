import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, UpperCasePipe, DatePipe]
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];

  message: string = '';

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}

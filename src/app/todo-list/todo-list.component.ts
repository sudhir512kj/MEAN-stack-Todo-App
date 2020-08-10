import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  Todo: any = [];

  constructor(private apiService: ApiService) {
    this.readTodo();
  }

  ngOnInit(): void {}

  readTodo() {
    this.apiService.getTodos().subscribe((data) => {
      this.Todo = data;
    });
  }

  removeTodo(todo, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteTodo(todo._id).subscribe((data) => {
        this.Todo.splice(index, 1);
      });
    }
  }
}

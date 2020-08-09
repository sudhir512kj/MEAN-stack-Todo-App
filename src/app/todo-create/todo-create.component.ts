import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent implements OnInit {
  submitted = false;
  todoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {}

  mainForm() {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get myForm() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.todoForm.valid) {
      return false;
    } else {
      this.apiService.createTodo(this.todoForm.value).subscribe(
        (res) => {
          console.log('Todo successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/todos-list'));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

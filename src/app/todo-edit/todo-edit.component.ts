import { Todo } from './../model/Todo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  todoData: Todo[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateTodo();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTodo(id);
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getTodo(id) {
    this.apiService.getTodo(id).subscribe((data) => {
      this.editForm.setValue({
        title: data['title'],
        description: data['description'],
      });
    });
  }

  updateTodo() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTodo(id, this.editForm.value).subscribe(
          (res) => {
            this.router.navigateByUrl('/todos-list');
            console.log('Content updated successfully!');
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-todo' },
  { path: 'create-todo', component: TodoCreateComponent },
  { path: 'edit-todo/:id', component: TodoEditComponent },
  { path: 'todos-list', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

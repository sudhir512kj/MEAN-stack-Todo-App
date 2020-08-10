import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

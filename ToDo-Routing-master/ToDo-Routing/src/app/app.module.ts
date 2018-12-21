import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { EditFormComponent } from './todo/edit-form/edit-form.component';

import { CategoryComponent } from './category/category.component';
import { CatListComponent } from './category/cat-list/cat-list.component';
import { CatNewFormComponent } from './category/cat-new-form/cat-new-form.component';
import { EditCformComponent } from './category/edit-cform/edit-cform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    EditFormComponent,
    
    CategoryComponent,
    CatListComponent,
    CatNewFormComponent,
    EditCformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

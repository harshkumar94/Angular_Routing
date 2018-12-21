import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { EditFormComponent } from './todo/edit-form/edit-form.component';
import { CatNewFormComponent } from './category/cat-new-form/cat-new-form.component';
import { EditCformComponent } from './category/edit-cform/edit-cform.component';

const routes: Routes = [

  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {path:'todo',component:TodoComponent,children:[
    {path:'new',component:TodoFormComponent},
    {path:'edit/:id',component:EditFormComponent}
  ]},
  {path:'category',component:CategoryComponent,children:[
    {path:'catnewform',component:CatNewFormComponent},
    {path:'catedit/:id',component:EditCformComponent}
  ]},
  { path: '**', redirectTo: 'todo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

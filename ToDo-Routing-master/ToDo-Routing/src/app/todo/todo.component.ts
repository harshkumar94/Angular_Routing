import { Component, OnInit } from '@angular/core';

import {ToDoService} from 'src/app/Services/to-do.service';
import {ToDo} from 'src/app/Models/ToDo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[ToDoService]
})
export class TodoComponent implements OnInit {
  tasks;
  task: ToDo;
  index: number;

  //listPage = true;
  //formPage = false;
  //editPage =false;
  

  
    constructor(toDoService: ToDoService) {
      this.tasks = toDoService.tasks;
    }

  ngOnInit() {
  }

  // showNewToDoForm(){
  //   this.listPage = false;
  //   this.formPage = true;
  // }

  // showEditForm(toDoEdit)
  // {
  //   this.index = toDoEdit.index;
  //   this.task = this.tasks[this.index];

  //   //this.listPage=false;
  //   //this.formPage=false;
  //   //this.editPage=true;
    
  // }
  onToDoAdded() {
   // this.tasks.push(toDo);
    // this.formPage = false;
    // this.listPage = true;
  }
  showListPage()
  {
    // this.editPage=false;
    // this.listPage=true;
    
  }
  viewListPage()
   {
  //   this.editPage=false;
  //   this.listPage=true;
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToDoService} from 'src/app/Services/to-do.service';
import { ToDo } from 'src/app/Models/ToDo';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

   todos
  //@Output() addNewToDoButtonClicked = new EventEmitter();
  //@Output() editToDOButtonClicked =new EventEmitter<{index: number}>();

  cname: string = "";
  ccategory: string = "";
  cstatus: boolean ;



  constructor(toDoService: ToDoService, private router:Router,private route:ActivatedRoute)
   {
    this.todos = toDoService.tasks;
  }

  ngOnInit() {
  }

  onNewButtonClick()
   {
    //this.addNewToDoButtonClicked.emit();
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  onEditClicked(index)
  {

    this.router.navigate(['/todo','edit',index]);
    
    //  this.editToDOButtonClicked.emit({
    //   'index': index
    // });
   
  }
    deleteFieldValue(todo)
     {
      this.todos = this.todos.filter(t => t.name !== todo.name);
      }
  }

  



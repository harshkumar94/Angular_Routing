import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToDoService} from 'src/app/Services/to-do.service';
import { ToDo } from 'src/app/Models/ToDo';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  name: string = "";
  category: string = "";
  status: boolean = false;
  toDoService: ToDoService;
  
  constructor(toDoService: ToDoService ,private router:Router,private route:ActivatedRoute) {
     this.toDoService = toDoService;
   }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDo(this.name, this.category, this.status)
    );
    this.router.navigate(['todo'],{relativeTo:this.route})
  //  this.addNewToDo.emit();
  }
  
  onCancleOfForm()
  {
    this.router.navigate(['todo'],{relativeTo:this.route})
    //this.addNewToDo.emit();
  }
    onClearClick()
    {
      this.category='';
      this.name='';
      this.status=false;
    }
  
}

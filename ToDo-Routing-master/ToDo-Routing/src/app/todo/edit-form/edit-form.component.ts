import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { ToDoService } from 'src/app/Services/to-do.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  id;

  name: string = "";
  category: string = "";
  status: boolean = false;
 
  constructor(
    public toDoService: ToDoService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
  
  onSubmitOfEdit(todos) 
  {  
     // this.toDoService.tasks.push(new ToDo(todos.name,todos.category,todos.status));
    //console.log(todos.name, todos.category, todos.status);
   // this.showListPage.emit();
   this.router.navigate(['todo'],{relativeTo:this.route})
    }
 
    onCancleOfEdit()
    {
      this.router.navigate(['todo'],{relativeTo:this.route})
     // this.cancleClicked.emit();
    }
    onClearClick()
    {
      this.toDoService.tasks[this.id].name='';
       this.toDoService.tasks[this.id].category='';
       this.toDoService.tasks[this.id].status=false;
    }
}

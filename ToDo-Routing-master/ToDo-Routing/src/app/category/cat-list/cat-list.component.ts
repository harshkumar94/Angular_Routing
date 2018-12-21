import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {CategoryService} from 'src/app/Services/catagory.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  catname;
  @Output() showNewCatForm = new EventEmitter();

  
  @Output() editToDOButtonClicked =new EventEmitter<{index: number}>();
// name :String;


  constructor(category: CategoryService,private router:Router,private route:ActivatedRoute) {
    this.catname=category.catname;
  }
 
  ngOnInit() {
  }


  onCatNewButtonClick()
  {
    this.router.navigate(['catnewform'],{relativeTo:this.route})
    //this.showNewCatForm.emit();
  }
  deleteFieldValue(todo) {
    this.catname = this.catname.filter(t => t.name !== todo.name);
    }

  onEditClicked(index)
  {

    this.router.navigate(['category','catedit',index]);
    
    // this.editToDOButtonClicked.emit({
    //   'index': index
    // });  
  }
}

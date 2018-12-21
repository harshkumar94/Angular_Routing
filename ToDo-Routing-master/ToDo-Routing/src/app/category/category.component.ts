import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from '../Services/catagory.service';
import { Category } from '../Models/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

 catname;
 cname:Category;
 index:number;
 // @Output() editname;
  constructor(category: CategoryService) {
    this.catname=category.catname;
  }
  //catlistPage=true;
  //catNewFormPage=false;
  catEditForm=false;
  ngOnInit() {
  }
  
  
  // viewCatEditForm(cn)
  // {
  //   this.catEditForm=true;
  //   //this.catlistPage=false;
  //   //this.catNewFormPage=false;
  //   this.editname=cn;
  // }
  // onCatAdded()
  // {
  //  // this.catname.push($event);
  //   //this.catNewFormPage=false;
  //   //this.catlistPage=true;
  // }
  // viewListForm()
  // {
  //   this.catEditForm=false;
  //  // this.catlistPage=true;
  // }
  // // showEditForm(toDoEdit)
  // // {
  // //   this.index = toDoEdit.index;
  // //   this.cname = this.catname[this.index];

  // //   //this.catlistPage=false;
  // //   //this.catNewFormPage=false;
  // //   this.catEditForm=true;
    
  // // }
}

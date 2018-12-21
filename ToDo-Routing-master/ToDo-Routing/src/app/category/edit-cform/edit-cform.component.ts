import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/catagory.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-cform',
  templateUrl: './edit-cform.component.html',
  styleUrls: ['./edit-cform.component.css']
})
export class EditCformComponent implements OnInit {
  id;
//editvar : CategoryService;
//@Input() cname : Category;
//@Output() showCatList= new EventEmitter();

  constructor(public cats:CategoryService,private router:Router,
    private route: ActivatedRoute)
   {
    // this.editvar=cats;
    }

  ngOnInit() { this.id = this.route.snapshot.params['id'];

  this.route.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
    }
  );
  
  }
  onSubmitOfEdit(cname)
  {
    //this.cats.catname.push( new Category('cname'));
   // this.showCatList.emit();
   
  }
  onClearClick()
  {
     //this.cname.name='';
  }
  onCancleOfEdit()
  {
    
    this.router.navigate(['/category'],{relativeTo:this.route})
   // this.cname.name=cn;
   // this.showCatList.emit();
  }
}

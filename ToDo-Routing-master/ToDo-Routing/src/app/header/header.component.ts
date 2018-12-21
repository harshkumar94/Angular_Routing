import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() showCat = new EventEmitter();
  @Output() showToDo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCatClick()
  {

    this.showCat.emit();
  }
  onToDoClick()
  {
    this.showToDo.emit();
  }

}

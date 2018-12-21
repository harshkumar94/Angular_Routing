import { Injectable } from '@angular/core';

import { Category } from '../Models/Category';
@Injectable({
  providedIn: 'root'
})
export class  CategoryService {
  catname = [
    new Category( 'CDAC'),
    new Category( 'Trainer'),
    new Category( 'Employee')
    
  ];
  constructor() {  }
}

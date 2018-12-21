import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNewFormComponent } from './cat-new-form.component';

describe('CatNewFormComponent', () => {
  let component: CatNewFormComponent;
  let fixture: ComponentFixture<CatNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

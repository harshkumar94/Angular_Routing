import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCformComponent } from './edit-cform.component';

describe('EditCformComponent', () => {
  let component: EditCformComponent;
  let fixture: ComponentFixture<EditCformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
